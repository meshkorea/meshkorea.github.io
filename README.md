# Mesh Korea Makers Blog

메쉬코리아에서 기술, 유저 경험 및 공간 디자인, 서비스 기획 등 물류플랫폼을 만들기 위한 과정에 대한 고민과 그 해결을 담은 블로그입니다.

## 기여하기

### 준비물

1. 글
2. 글을 대표할 수 있는 일러스트 또는 사진: 주변 디자이너 분들이나 플랫폼셀 최태건에게 문의해주세요!


### 글 작성하기

#### 1. markdown 사용에 익숙하지 않으신가요?

1. 글을 markdown으로 작성해주세요.
2. 글 제목으로 폴더를 만들어주시고, 글을 `index.md`로 저장해주세요.
3. 삽입될 이미지는 다음 형식으로 준비해주세요.
  * 인링크로 삽입하실 경우: 2에서 만든 폴더 안에 이미지르 넣고, 마크다운에서 상대경로로 이미지를 삽입합니다. (문법: `![alternative text](./file-name.extension)`)
  * 아웃링크로 삽입하실 경우
  ```html
<div class="image-wrapper"><img src="(image path)" alt="(alternative text)"></div>
```
4. 이미지 캡션은 다음 형식으로 삽입해주세요.
```html
<p class="image-caption">(캡션)</p>
```
5. 글의 메타데이터는 이렇게 작성합니다.
  1. 파일 최상단에 이렇게 삽입해주세요
  ```
---
layout: post
title: (글 제목)
date: (작성일)
tags: (comma로 구분된 태그 목록. comma 뒤에 띄어쓰기 가능)
author: (저자 ID: 동명이인이 있는 경우가 아니면 이름을 사용합니다.)
titleImage: (준비된 일러스트/사진의 상대 경로)
link: (See also에 보여줄 링크, Optional)
linkDesc: (See also에 보여줄 링크의 설명, Optional)
github: (github repo 링크, optional)
appstore: (app store 앱 페이지 링크, optional)
playstore: (play store 앱 페이지 링크, optional)
---
```
