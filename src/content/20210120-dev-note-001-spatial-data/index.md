---
layout: post
title: "Spatial data를 10,000배 잘 다루게 된 방법  "
date: "2021-01-20"
tags: ["postgis", "Dev Notes"]
author: 강성일
authorDesc:
titleImage: "./title.png"
github: https://github.com/Luavis/luavis.github.io/blob/master/_posts/server/2020-11-19-how-to-deal-with-spatial-data.md
link: https://b.luavis.kr/server/how-to-deal-with-spatial-data

---

안녕하세요. 메쉬코리아 기반서비스서버팀 강성일입니다.
이번에 Spatial data를 **10,000배!** 잘 다루게 된 방법에 대해 공유하고자 글을 쓰게 되었습니다 😀

들어가기에 앞서, **메쉬코리아**는 음식, 화장품, 편의점 상품과 같은 상품을 실시간으로 배송하는 서비스인 스마트 물류 플랫폼 **부릉(Vroong)** 🚛 을 운영하는 회사인데요.

배송 주문을 처리하기 위해서는
+	상점과 고객 사이의 거리와 장애물 등을 고려하여 처리할 수 있는 주문건인가?
+	기사님께는 얼마만큼의 금액을 지불해야 하는가?
+ 상점에서는 얼마만큼의 금액을 받아내야 하는가?

를 판단해야 합니다.

그래서 **spatial data**를 이용하여 각 상점의 배송 가능한 권역들, 배송이 불가능한 권역들을 관리하는 권역 시스템을 운영하고 있습니다.

권역 시스템에서는 **spatial data**를 효율적으로 다루기 위해서 **PostgreSQL**에서 지원하는 **PostGIS**를 이용하고 있는데요.
**지도 화면에서 보이는 영역과 행정동/법정동 polygon의 intersects를 계산하고 polygon을 가져오는 과정에서 큰 성능 이슈를 가지고 있었습니다.** *(worst case에서는 조회시간이 60초 정도 걸렸습니다...눈물 😢 )*

성능이 떨어지는 문제의 쿼리는 아래와 같았습니다.

```
SELECT region.*
FROM region
INNER JOIN address_polygon on region.pk=address_polygon.region_pk
INNER JOIN address on address_polygon.address_pk=address.pk
WHERE address.address_type = 'LEGAL'
AND region.region_type = 'ADDRESS_REGION'
AND region.status = 'ENABLED'
AND st_intersects(
    region.polygon,
    ST_MakeEnvelope(126.9373539, 37.5210172, 127.0540836, 37.5873607, 4326)
);
```
**[쿼리1]**

그럼 이 문제를 어떻게 해결했는지, **어떻게 성능을 10,000배 올릴 수 있었는지** 지금부터 이야기해보겠습니다!

## Spatial data의 intersects의 계산 방법

문제 상황에서 사용하는 spatial data는 2d의 polygon 입니다. 그리고 intersects는 두개의 polygon이 겹치는지를 판단하는
연산을 의미합니다. 이를 postgresql에서는 아래와 같이 사용합니다.

```sql
SELECT * FROM region WHERE region
AND st_intersects(
    region.polygon,
    ST_MakeEnvelope(126.9373539, 37.5210172, 127.0540836, 37.5873607, 4326)
);
```
**[쿼리2]**

위 쿼리는 region 테이블의 polygon 컬럼과 서울 종로구 부근의 영역을 비교하여 '겹치는 영역이 있는가'를 조건으로
select 하는데요. 약 천만개의 row가 있는 region 테이블에서도 0.5초내외의 성능을 보여주면서 의외로 빠른 성능을 보여줍니다.
intersects 연산이 단순하게 생각하면 무거운 연산일거라 추측할 수도 있습니다. 이 쿼리가 어떻게 빠르게 동작할 수 있는 것인지
의문이 드는데, 가능한 방법이 있습니다. 바로 [R-Tree](https://en.wikipedia.org/wiki/R-tree)라는 자료구조를 사용한
index 구조를 통해 계산하면 intersects 계산을 빠르게 할 수 있다고 합니다.

R-tree의 인덱싱 방법은 B-tree와 유사한데, polygon 데이터들의 최소한의 bounding box를 구하고 그 박스 간의 포함관계를
B-tree의 형식으로 관리하는 index tree입니다. 이렇게 B-tree의 범위 조회와 같은 계산 방법으로 계산하면 포함관계와
교차관계(intersects)를 쉽게 계산할 수 있습니다. index search를 통해서 대충 intersects하는 polygon을 bounding box가
아닌 실제 polygon과의 intersects 연산을 한번 더 진행해서, 진짜 원하는 polygon이 맞는지 한번 더 선별과정을 거칩니다.

![](https://upload.wikimedia.org/wikipedia/commons/6/6f/R-tree.svg)

이 권역 서비스는 처음부터 프로젝트에 involve된게 아니었기 때문에 위 문제의 쿼리1을 만났을때는
쿼리2를 테스트 해보지 않았습니다. 따라서 천만개의 row에 대해 intersects를 모두 계산한다고 생각했기 때문에, 어떻게 해도
빠르게 할 수 있는 방법이 없다고 생각했죠. 따라서 모든 폴리곤을 메모리에 올리고 최적화된 알고리즘을 구현해야겠다는
생각을 하면서 찾아보다가 R-tree에 대해서 알게 되었습니다.
R-tree 성능에 대해서 Python으로 구현해보고 충분히 빠른 것을 확인하였습니다. Python에서는 R-tree의 구현을
ctypes를 이용해 libspatialindex를 래핑한 [라이브러리](https://pypi.org/project/Rtree/)를 찾을 수 있었습니다.

그래서 'PostGIS는 이런 것을 지원 안하나?' 싶어서 찾아보게 되었는데 PostGIS도 R-tree와 같은 bounding box indexing을 지원한다는
것을 알게 되었고, 심지어 해당 인덱싱이 위의 쿼리에 `polygon` 컬럼에 적용되어 있는 것을 확인했습니다.

정확히는 PostGIS는 R-Tree라는 이름으로 사용하지 않고 [GIST](https://postgis.net/workshops/postgis-intro/indexing.html)
라는 이름으로 index 방법을 제공하고 있는것을 알게 되었습니다. 그리고 위 GIST의 링크를 읽어보면 나와 있는데,
bounding box간의 연산을 위해서 postgresql에서는 [특수한 연산자](https://postgis.net/docs/reference.html#idm9871)를 따로
지원하고 있습니다. 또한 st_intersects는 이미 내부에서 `&&` 연산자를 통해서 bounding box간의 연산을 하고 `AND` 조건으로
실제 polygon이 intersects 하는 가를 판단한다는 것을 알게 되었습니다. 이 사실을 알고 위 쿼리 2를 작성하여 쿼리해보고,
0.5초의 성능이면 1분에 비해서는 굉장히 좋은 성능이 나온다는 것을 알 수 있었습니다. 그래서 어떻게 이 정도의 차이를 갖게 되는지
좀 더 정확히 알아보고자 `explain analyze`를 해보게 되었습니다.

```
Index Scan using polygon_geom_idx on region  (cost=0.42..513509.60 rows=... width=...) (actual time=0.136..515.878 rows=... loops=1)
    Index Cond: (polygon && '...'::geometry)
    Filter: _st_intersects(polygon, '...'::geometry)
    Rows Removed by Filter: 383
Planning Time: 0.244 ms
Execution Time: 522.464 ms
```

위 explain 결과를 보면 index condition으로 `polygon` column 과 `&&` 연산을 통해서 bounding box를 주어진
polygon 데이터와 비교하고, 후에 filter 조건으로 `_st_intersects`를 사용하는 것을 확인할 수 있습니다.


## 그러면 문제는 어디서 발생하는걸까?

그렇다면 '문제가 된 쿼리 1은 도대체 무슨 문제가 있었던 건가?' 싶어서 해당 쿼리도 `explain analyze`를 돌려보았습니다.

```
Gather  (cost=1080.01..67698.36 rows=... width=1894) (actual time=117.101..66590.220 rows=... loops=1)
  Workers Planned: 1
  Workers Launched: 1
  ->  Nested Loop  (cost=80.01..66697.06 rows=8 width=1894) (actual time=66.379..65641.273 rows=134 loops=2)
        ->  Nested Loop  (cost=79.58..51221.10 rows=1996 width=8) (actual time=63.748..5975.698 rows=401872 loops=2)
              ->  Parallel Bitmap Heap Scan on address  (cost=79.14..10717.49 rows=1714 width=8) (actual time=57.163..61.659 rows=2526 loops=2)
                    Recheck Cond: ((address_type)::text = 'LEGAL'::text)
                    Heap Blocks: exact=107
                    ->  Bitmap Index Scan on address_address_type_index  (cost=0.00..78.42 rows=2914 width=0) (actual time=100.710..100.710 rows=5504 loops=1)
                          Index Cond: ((address_type)::text = 'LEGAL'::text)
              ->  Index Only Scan using address_polygon_pkey on address_polygon  (cost=0.43..23.23 rows=40 width=16) (actual time=0.579..2.307 rows=159 loops=5052)
                    Index Cond: (address_pk = address.pk)
                    Heap Fetches: 304308
        ->  Index Scan using region_primary_key on region  (cost=0.43..7.75 rows=1 width=1894) (actual time=0.147..0.147 rows=0 loops=803744)
              Index Cond: (pk = address_polygon.region_pk)
              Filter: ((optimized_polygon_30 && '...'::geometry) AND ((region_type)::text = 'ADDRESS_REGION'::text) AND ((status)::text = 'ENABLED'::text) AND _st_intersects(optimized_polygon_30, '...'::geometry)
              Rows Removed by Filter: 1
Planning Time: 3.403 ms
Execution Time: 66590.472 ms
```

해당 쿼리를 살펴보면 polygon의 index를 타지 않고 쿼리가 되는 걸 확인했습니다. 다양한 방법으로 해당 쿼리를 시도해봤는데,
거의 대부분 `address_address_type_index`를 타는 것을 확인할 수 있었습니다. 왜 그런지 이유를 찾아보고 싶었지만 명확하게
알 수 있는 방법은 없었고, 추론할 수 있는 근거들에 대해서는 몇 가지 알게 되었습니다. 가장 타당하다고 생각되는 근거는
위 [Spartial indexing](https://postgis.net/workshops/postgis-intro/indexing.html#analyzing)에 대한 document에서 확인할
수 있었습니다.

> it is not always faster to do an index search: if the search is going to return every record
> in the table, traversing the index tree to get each record will actually be slower than just sequentially reading
> the whole table from the start.

postgresql이 경우에 따라서 index를 타는 것이 비효율적이라 판단되면 풀서치하는 방향으로 optimize하는걸 알게 되었습니다.
어떤 기준으로 하는지가 불명확하고 vacuuming 해도 index를 사용할 때도 있고 안 할 때도 있어서 단순히 vacuuming으로는 일관적인
성능을 보장하기는 어렵다고 판단했습니다.

위에 region의 테이블이 약 천만개의 row가 있는데 실제로 그중 행정동/법정동과 시군구, 시도의 모든 폴리곤을 58,000개 정도 밖에 안돼서 postgresql이 `spatial index`를 타는게 이득이 될 수 있다 판단할 수 있도록 row 수를 줄이고, join을 풀어서
`spatial index`와 `address_type index`를 병렬로 사용할 수 있도록 하기 위해서 table을 합칠까 생각하던 중
[materialized view](https://en.wikipedia.org/wiki/Materialized_view)를 떠올리게 되었습니다.

oracle, postgresql, mariadb 에서는 일반적인 view와는 달리 물리적으로 어느 정도의 데이터를 저장하고 view의 column에
index를 적용할 수 있는 materialized view를 지원합니다. join 조건을 materialized view로 만들어서 최적화하고
`polygon` 컬럼에 index를 적용 시켜준다면 spatial index 사이즈가 작아지면서 postgresql이 cost
계산을 더 잘 할 수 있을거라 추측해서 아래와 같이 적용해봤습니다.

```sql
CREATE MATERIALIZED VIEW address_region_view AS
SELECT ap.region_pk, region.polygon, ap.address_type FROM (
    SELECT address_polygon.region_pk, address.address_type FROM address
    LEFT JOIN address_polygon ON address.pk = address_polygon.address_pk
    WHERE address.address_type IN ('LEGAL', ...)
) ap
LEFT JOIN region ON region.pk = ap.region_pk
WHERE region.region_type = 'ADDRESS_REGION'
AND region.status = 'ENABLED';

CREATE INDEX address_region_view_idx ON address_region_view using gist(polygon);
CREATE INDEX address_region_view_address_type_idx ON address_region_view (address_type);
```

쿼리1의 조건을 view로 녹여내고 index를 적용한 `address_region_view`를 통해서 같은 결과가 나와야하는 쿼리를 재구성하여
explain을 통해 성능을 측정해봤습니다.

```sql
SELECT region.*
FROM address_region_view
LEFT JOIN region ON region.pk = address_region_view.region_pk
WHERE address_region_view.address_type='LEGAL'
    AND st_intersects(
        address_region_view.polygon,
        ST_MakeEnvelope(126.9373539, 37.5210172, 127.0540836, 37.5873607, 4326)
    );
```

위 쿼리를 사용하여 explain 해보면 결과는 아래와 같습니다.

```
Nested Loop Left Join  (cost=166.64..825.34 rows=32 width=1533) (actual time=1.660..6.270 rows=... loops=1)
  ->  Bitmap Heap Scan on address_region_view  (cost=166.21..554.86 rows=32 width=8) (actual time=1.645..5.412 rows=... loops=1)
        Recheck Cond: ((polygon && '...'::geometry) AND ((address_type)::text = 'LEGAL'::text))
        Filter: _st_intersects(polygon, '...'::geometry)
        Rows Removed by Filter: 2
        Heap Blocks: exact=270
        ->  BitmapAnd  (cost=166.21..166.21 rows=95 width=0) (actual time=1.573..1.573 rows=0 loops=1)
              ->  Bitmap Index Scan on address_region_view_idx  (cost=0.00..52.81 rows=1137 width=0) (actual time=0.488..0.488 rows=1281 loops=1)
                    Index Cond: (polygon && '...'::geometry)
              ->  Bitmap Index Scan on address_region_view_address_type_idx  (cost=0.00..113.14 rows=4896 width=0) (actual time=1.003..1.003 rows=5048 loops=1)
                    Index Cond: ((address_type)::text = 'LEGAL'::text)
  ->  Index Scan using region_primary_key on region  (cost=0.43..8.45 rows=1 width=1533) (actual time=0.003..0.003 rows=1 loops=...)
        Index Cond: (pk = address_region_view.region_pk)
Planning Time: 0.686 ms
Execution Time: 6.408 ms
```

총 실행시간이 66,590ms에서 6.4ms에 가깝게 줄어든것을 확인할 수 있었습니다!

## 결론

spatial data를 한 테이블에 너무 많은 데이터를 넣으면 index연산할때 원하지 않는 방식으로 계산할 여지가 있습니다.
따라서 최대한 실제 application이 필요로 하는 데이터만을 추려서 materialized view로 만든다면 성능에 개선이 있을 수 있습니다.
즉, **기본에 충실하게 생각하면 됩니다...** 😂

## 마치며
이로써 **Spatial data**의 성능을 **10,000배 UP!** 시킨 이야기가 끝이 났습니다.
이번 사례를 통해 많은 것을 배울 수 있었는데요. **postgresql이 index를 타는 것이 비효율적이라 판단되면 풀서치하는 방향으로 optimize한다**는 것을 알게 되었을 뿐만 아니라 **기본에 충실하자..^^** 는 교훈 역시 얻을 수 있었습니다!
앞으로도 좋은 사례가 있으면 다시 찾아오겠습니다 :)

그리고 늘 좋은 물류 BPO 서비스를 제공하기 위해 노력하고 있는 메쉬코리아 부릉, 많이 지켜봐주세요!

긴 글 읽어주셔서 감사합니다 😊
