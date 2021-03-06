---
layout: post
title: "JavaScript in 2017: 옛날 사람 탈출하기"
date: "2017-03-27"
tags: ["Dev Notes", "JavaScript", "react"]
author: 최태건
authorDesc: "플랫폼셀에서 웹 프론트엔드 개발을 담당하고 있습니다"
titleImage: "./title.png"
---

최근 몇 년간 JavaScript의 발전과 혁신은 매우 눈부셨다. 2000년대 중반, `XMLHttpRequest`가 재발견되기 전까지만 해도, 이 언어가 이렇게 사용될 것이라 예상한 사람이 몇이나 있었을까 궁금할 정도다. 2000년대 말 "Rich Internet Application"이란 단어는 **Flash**와 같은 비표준 플러그인을 사용해 현대의 Single Page Application과 비스무리한 웹 페이지를 만든다는 뜻이었다. 물론, 지금 Flash를 쓴다고 하면 (모바일을 포기해야만 하는 특별한 이유가 있거나, 공공 기관과 일을 하지 않는 이상) 정말 옛날 사람 취급을 받을 것이다. 심지어, 어도비는 Flash Professional을 Animate로 이름을 바꾸기까지 했으니 말이다. 그런데 놀랍게도, 이런 발전들은 2010년대 중반의 3~4년간 집중해서 일어났다. 대체 그 시간 동안 무슨 일이 있었던 것일까?

필자는 애석하게도 그 시간 동안 ~~시간과 정신의 방~~ 군대에 있었다. 그 시간동안 무슨 일이 일어났으며, 순식간에 "옛날 사람"이 된 프론트엔드 개발자가 "요즘 사람"이 되기 위해 어떤 일을 겪어야 했는지 여기에 소개하겠다. "ES(ECMAScript)"라는 말조차 낯설게 들리신다면, 그리고 최신 웹 기술을 배워보고 싶으신 분들이라면, 이 글이 도움이 될 수 있을 것이다.

## jQuery가 한물갔대...
2010년대 초반, 프론트엔드에서 '핫한' 것은 역시 jQuery였다. 모든 플러그인이 다 jQuery 위주로 나왔다. 그럴법도 했다. DOM이라는 핵폐기물을 그럴듯하게 쓸 수 있는 가장 좋은 방법이었으니까. 하지만 jQuery는 태생적으로 큰 한계가 있다. **타이밍**. 무슨 인생도 아니고. DOM이 수정되어도 jQuery 객체는 그것을 알지 못한다. 그러니 Ajax로 콘텐츠가 추가되면 (때에 따라 **중복 이벤트 바인딩을 막기 위해** 기존 이벤트 바인딩을 `unbind`, 즉, 제거하고) 이벤트를 다시 바인드 해야 한다. 따라서 Ajax 처리 로직이 거대해진다. 그래도 컴포넌트라는 개념을 어떻게든 만들어 쓸 수는 있었다. 그게 너무 힘들었을 뿐이다. (사실 jQuery의 가장 큰 문제는 함수형처럼 보이지만 side-effect가 여기저기에서 튀어나오는 위험한 물건이라는 거다. 그래서 코드가 복잡해진다.)

<div class="image-wrapper">
  <img src="https://cl.ly/jiQd/download/jQuery.png" alt="jQuery">
</div>
<p class="image-caption">write less?</p>

그러니 개발 모델을 쉽게 세울 수 있는 프레임워크들이 등장했다. Backbone부터 Angular를 거쳐, React까지. Vue.js도 아직 핫하다. 물론 잠시 신문물(?)에서 멀어져있던 나는 그 많은 것들을 다 연습해볼 자신은 전혀 없었다. 선택의 시간이 온 것이다. 물론, 그 선택의 시간 앞에는 꼭 거쳐야 했던 수련의 시간이 있었다.

## 수련의 시간: 새로운 자바스크립트
먼저, ECMAScript라는 단어에 익숙해져보자. ECMAScript는 브라우저에 따라 제멋대로이던 JavaScript의 표준을 정의하기 위해 만들어진 웹 스크립트 언어의 표준이다. 그 전에는 넷츠케이프(지금은 모질라)가 JavaScript를, 그리고 마이크로소프트는 VBScript를 밀다가 안 된다는 것을 깨닫고 JavaScript를 자신들 나름대로 구현한 JScript라는 언어를 만들 정도로, 웹 스크립트 언어는 중구난방이었다. ECMA Internation이라는 기구에 브라우저 개발사가 다같이 모여 이를 정리한 것이 ECMAScript라고 생각하시면 된다.

그리고 2015년. ES2015, ES6, ES Harmony, ... 자바스크립트의 타입 변환만큼 부르는 사람마다 제멋대로인 이름으로 새로운 ECMAScript의 표준이 발표되었다. (이게 어떻게 부르든 맞는 게, 풀네임부터가 ECMAScript 2015, ECMA-262 6th Edition이다.) 그동안 JavaScript가 1.x대에서 놀았다면, 이번엔 2.0으로 올라왔다고 할 수 있을 정도로 큰 변화였다. '왜 이걸 이제서야' 하는 한숨과 함께, 웹 개발자들은 모두 다 함께 새로운 표준을 수련해야 했다. ECMAScript 6의 중요 변경점을 정리해보면 대강 이렇다.

### 언어적으로 모자랐던 점들의 보완
* Block-Scoped 변수가 추가됐다. `let`이라는 당황스러운 이름으로. (`var`는 '함수 스코프'다. 그것도 충격인데, 아니, `let`이 변수라고?)
* Block-Scoped 상수도 추가됐다. `let`이 아닌 `const`라는 이름으로.
* `Promise`가 도입됐다. (콜백은 이제 빠이...)
*  `export`, `import`가 추가됐다. (AMD는 이제 빠이...)
* `for ... of`가 추가됐다. 물론 이 새로운 구문에 대한 불만은 여전히 있는 편. (`Array.prototype.forEach`가 멀쩡히 살아있으니...)
* 제너레이터가 추가됐다. 점화식 기반의 함수를 재귀 없이 짤 수 있다는 장점도 있고, 이걸 [마개조하면 async function을 절차 지향적인 코드와 흡사한 구조로 짤 수 있다](https://github.com/tj/co)는 장점도 있다.
	* 결국, ES2017부터 이걸 활용해 `async function` - `await`라는 게 추가된다.
* `Map`, `Set`, Typed Array가 추가됐다.
* `Proxy`, `Reflection`이 추가됐다.

### 빌트인 메소드 강화
* 정말 없었던 게 한심했던 몇몇 메소드들이 추가됐다. `Number.isNaN`, `Number.isFinite` 등 같은.
* 정말 없었던 게 한심했던 몇몇 상수들이 추가됐다. `Number.EPSILON`, `Number.MAX_SAFE_INTEGER` 등 같은.
* 있으면 좋은 몇몇 메소드들이 추가됐다. `String.repeat`, `String.prototype.startsWith`, `String.prototype.endsWith`, `String.prototype.includes`, `String.prototype.padStart`, `Array.prototype.find` 등 같은.
	* ES2016에는 `Array.prototype.includes`도 추가됐다.
* 다국어 숫자/통화/시간 지원이 강화됐다.

### Syntactic Sugars
* `class`가 추가됐다. (여전히 내부적으로는 `prototype`으로 돌아간다.) 상속도 `extends`로 하고, `super`같은 걸 쓸 수 있고, `get` `set` 메소드도 쉽게 만들 수 있다.
* Arrow Function이 추가됐다. Block-scoped Function과 조합하면 매우 파워풀해진다. 심지어 이 친구를 쓰면 `this`가 새롭게 만들어지지 않는다!
```javascript
const arrowFunction1 = (params) => params + 1
const arrowFunction2 = (params) => {
  return params + 2
}
```
* default value 선언해주기가 쉬워졌다.
  ```javascript
  // no more variableName = variableName || defaultValue
  const addSomething = (value, add = 1) => value + add
  const a = addSomething(3) // 4
  ```
* spread syntax, rest operator같은 아주 편리한 기능이 추가됐다.
  ```javascript
  const array1 = [1, 2, 3]
  const array2 = [4, 5]
  const foo = [...array1, ...array2] // [1, 2, 3, 4, 5]
  const getSumOfFirstTwoItems = (a, b, ...restProps) => a + b
  const result = getSumOfFirstTwoItems(...foo) // 3
  ```
* 템플릿 스트링이 추가됐다.
```javascript
const a = 5
const msg = `${a}개`
```

이 외에도 정말 많다. 일단 핵심만 추려본 거다. 아까 잠깐 언급했던 `async function` - `await` 등이 추가된 ES2016 그래도 자바스크립트는 자바스크립트더라. `[]`는 `true`지만 `[] == true`는 `false`인 어메이징한 언어...

자세한 내용은 [이 사이트](http://es6-features.org)에서 공부해보자.

## 선택의 시간: 어떤 프레임워크를 사용할 것인가?

<div class="image-wrapper"><img src="https://cl.ly/ji3a/download/shopping-1435868-639x497.jpg" alt="쇼핑"></div>
<p class="image-caption">기술 쇼핑할 시간!<br>FreeImages.com/Jean Scheijen</p>

이제 선택의 시간이 왔다. 어떤 프레임워크를 사용할지. 어쨌든 규모 있는 웹사이트에서 [바닐라 JS](http://vanilla-js.com)를 쓰진 않을 것 아닌가. 사실 조금만 돌아다녀도 [요즘 자바스크립트 기술을 배울 때 드는 기분](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f)에 대한 회의감에 대한 글들이 자주 보이는데, 이런 글들은 하루가 멀다하고 새로운 프레임워크가 등장하는 요즘의 JS 생태계에 대한 피로감을 그대로 대변한다. 그렇다면 어떻게 해야 그 홍수 속에서 만족할만한 기술을 선택할 수 있을까?

이래저래 찾아보고 부딪혀본 결과, 우리는 나름의 원칙을 세울 수 있었다.

* 많이 사용돼야 한다. 그래야 많은 사람과 협업할 때 팀 전체의 러닝 커브를 완만하게 할 수 있다.
* 생태계가 건강해야 한다. 그래야 잘 작동하는 라이브러리를 손쉽게 쓸 수 있다.
* **프로젝트의 특징에 따라 다른 프레임워크를 선택해야 한다. 즉, 기술보다 프로젝트의 특징이 먼저다.**
	* SPA(Single Page Application)를 만들고 싶다? [React.js](https://facebook.github.io/react/)나 [Angular](https://angular.io)를 고려해보자.
	* 원 페이지 intro page를 만들고 싶다? [Vue.js](https://vuejs.org)도 좋고, 이런 상황에서는 여전히 jQuery가 현역이다.
	* 라우팅을 서버에서 해준다? 일단 왜 이 시대에 굳이 그래야 하는지 고민해보고, Vue.js를 고려해보자. 라우팅이 필요한 복잡한 웹사이트에서 jQuery 쓰기는 너무 귀찮다.
	* 모바일에서 돌아가는 웹앱을 만들고 싶다? 왜? 꼭 그래야 하나? 정말? 굳이 필요하면 React-native같은 친구들이 있는데, 왜?

요즘은 캐싱의 유리함, CDN 적용의 용이성, 그리고 웹 서버가 가벼워질 수 있다는 이유로 웹 서버 프레임워크 없이 SPA를 만드는 경우가 많다. 그러니, SPA에 대해 특별히 더 살펴보자. SPA를 만들고 싶을 때, 보통은 Angular ~~2~~4 대신 React를 고른다. (아무래도 TypeScript를 써야 한다는 진입장벽이 크게 작용하는 듯하다. 물론 TypeScript는 아주 훌륭하지만. 필자가 Angular를 싫어하는 이유는 TypeScript 때문은 아니고, 템플릿 HTML의 `*ngFor`, `*ngIf`같은 문법을 정말 싫어하기 때문이다.) 하지만 그게 끝이 아니다. SPA의 특징상 개발 패턴을 결정해주는 다른 모델들을 고려해볼 필요가 있다. 이벤트 기반 Reactive 패턴을 어떻게 활용할 것인가에 따라 다음과 같은 선택을 할 수 있다.

* [flux](https://facebook.github.io/flux/): 페이스북에서 처음 발표한 아키텍쳐. Action은 Dispatcher를 통해 Store의 데이터를 만지고, View는 Store의 데이터를 받아 표시한다. View는 Action을 호출할 수 있다.
* [redux](http://redux.js.org): flux의 다른 형태의 구현체. 핫 리로드도 되고 코드도 단순하고 이래저래 좋은 점이 많은데, 기능 하나 만들자고 파일 서너 개를 뜯어고쳐야 한다는 단점이 있긴 하다. redux-saga 같은 미들웨어를 쓰면 꽤 아름다운 코드를 만들 수 있다. (파일 하나를 **또** 만들어야 하지만.)
* [ReactiveX](http://reactivex.io): MS에서 발표한 아키텍쳐. (비록 flux 모델은 tiny하다고 주장했지만) 거대한 스토어는 때려치우고, Observable 패턴과 Iterator 패턴을 사용한다. 퓨어한 함수형 프로그래밍 패턴의 적용이 가능하다.

우리는 많이 사용되는, 그리고 생태계가 화려한(?) 패턴을 사용하자는 원칙에 따라 redux를 선택하긴 했다. 물론 다른 선택도 가능하다.

## 수련의 시간 2: Learning Curve
필자의 경우 SPA를 만들어야 했다. 그래서 다음과 같은 스택을 사용하기로 했다. ~~사실 입사 전에 스택은 결정이 돼있었다. 여기서 바꾸지 않았을 뿐.~~

* [React.js Boilerplate](https://www.reactboilerplate.com)
	* [React.js](https://facebook.github.io/react/)
	* [Redux](http://redux.js.org)
	* [ImmutableJS](https://facebook.github.io/immutable-js/)
	* [reselect](https://github.com/reactjs/reselect)
	* [redux-saga](https://redux-saga.github.io/redux-saga/)
	* [react-i18n](https://github.com/yahoo/react-intl)
	* [react-router](https://reacttraining.com/react-router/), [react-router-redux](https://github.com/reactjs/react-router-redux)
	* [styled-components](https://styled-components.com) (!)
	* (안타깝게도 테스팅은 프로젝트 일정이 너무 빡빡해서 적용하지 못함)
* 그리고 모던 자바스크립트의 영원한 친구
	* [webpack](http://webpack.github.io) - 모듈과 라이브러리들을 몇 개의 파일로 묶어주고, minify같은 작업을 해준다.
	* [babel](http://babeljs.io) - 최신 자바스크립트 코드를 호환성 높은 예전 코드로 번역해준다.

저 중에 이 프로젝트를 사용하기 전에 한 번이라도 써본 건 다음과 같다.

* React.js
* webpack

깊이 다뤄봤던 건 다음과 같다.

* (없음)

하...

<div class="image-wrapper">
  <img src="https://cl.ly/jiTr/download/sleeping-man-1428701-639x955.jpg" alt="Learning_cliff">
</div>
<p class="image-caption">흔한_진입장벽.<br>FreeImages.com/Matthijs van Heerikhuize</p>

진입장벽이 얼마나 높았는지 감이 오시리라 믿는다. 어떻게 넘느냐? 쉬운 방법이 없다. 그냥 실제로 작동하는 코드를 보고 배우는 수밖에. 문서를 읽고, 검색하고, 튜토리얼이란 튜토리얼은 무조건 다 해보고. 그게 유일한 방법이다. 특히 중요한 점은, 하나의 프로젝트를 어떻게든 완결을 지어봐야 한다는 거다. 그냥 문서만 읽으면 아무 것도 배울 수 없더라. 여기에 구루 한 명이 붙어서 당신의 코드를 리뷰해줄 수 있다면, 학습 속도는 훨씬 빨라질 것이다. (사실 필자는 구루 덕을 많이 봤다.)

물론 이 방법에도 단점은 있다. **공부하면서 코드를 만들면 어느정도 숙달된 상황에서의 코드와 초기에 짠 코드가 굉장히 다른 스타일로 나온다.** 리팩토링은 필수라는 뜻이다. 테스트를 짜거나, 리팩토링을 진행한 후 속출하는 버그를 보고 QA팀에게 비난을 받거나. 두 가지의 선택지가 있다. 필자는 어떻게 했을까? 이 자리를 빌려 QA팀에게 사과의 말씀을 드린다는 말로 답을 대신한다.

그러므로, 필자처럼 혼나지 않으려면 다음 방법을 시도해보자. 아주 정석적이지만 시간이 오래 걸리는 방법이다. 시간이 부족하다면? 혼나는 수밖에...

### 만들면서 배우기: 1단계, todo list
많은 프레임워크는 Todo list를 만드는 것을 튜토리얼로 제공한다. 내 손으로 Todo list를 만들어보면 새로운 프레임워크에 적응이 될까? 세상은 그렇게 호락호락하지 않다. Hello, world! 하나 찍어봤다고 그 언어에 적응을 끝냈다는 사람은 없지 않은가.

물론, Todo list는 프론트엔드 프레임워크의 꽃인 MVC / Flux / Reactive 패턴, 그리고 그 패턴에 따른 CRUD(Create-Read-Update-Delete)를 연습하기에 가장 쉽고 간단한 형태의 어플리케이션이다. 여기서부터 시작하자는 데에 이견은 없다. 하지만 **절대 이것이 끝이 아님을 기억하라.**

필자는 이 단계에서 새하얀 페이지에 리스트만 출력하는 것은 하지 말기를 제안한다. 한물간 부트스트랩이든, 매터리얼 디자인이든. 페이지에 스타일을 적용하는 법은 이 단계에서 연습을 끝내야 한다. 그렇게 하면서 JSX든 handlebars든 angular식 HTML이든, presentation logic을 짜는 법에 익숙해지자.

단, 아직 복잡한 기술 스택이 모두 들어있는 보일러플레이트는 쓰지 말자. [create-react-app](https://github.com/facebookincubator/create-react-app) 수준의, 필수적인 것만 들어있고 프레임워크가 공식적으로 추천하는 보일러플레이트를 쓰는 것이 좋다.

### 만들면서 배우기: 2단계, 게시판
Todo list를 다 만들어봤다면, 이번엔 게시판을 시도해보자. 왜 게시판인가? 게시판에는 라우팅이 필요하다. 기왕 라우팅 쓸 거, 홈과 게시판을 분리해보라. 어느 페이지에 접속했는지 인디케이터도 붙여보고. 이렇게 하나의 프레임워크의 라우팅 모델에 익숙해져보자.

이쯤에서 API 서버도 웬만하면 하나 붙는 게 좋다. 이 과정에서 프레임워크가 이벤트 처리를 어떻게 하는 지 학습할 수 있을 것이다.

### 만들면서 배우기: 3단계, auth
Auth는 생각보다 어렵다. 정말이다. 토큰을 어디에 저장하고 싶은가? sessionStorage에 관리할 것인가? 자동 로그인을 위해 localStorage를 써볼까? 아니면 전통적인 cookie를 사용할까? 만약 토큰을 클라이언트에서 관리하고 싶다면, 그리고 Redux나 Flux를 적용했다면, 스토어와 브라우저 스토리지간의 데이터 활용을 어떻게 할지 여기서 고민할 수 있을 것이다.

만약 로그인 로직을 전부 다 짰고, 상단에 회원 정보를 노출한다면, 당신은 여기서부터 다른 컴포넌트에 데이터를 어떻게 갱신시킬지 고민하기 시작할 것이다. redux-thunk나 redux-saga같은 게 필요할지도 모른다. 애당초 사용한 게 ReactiveX라면 그런 고민은 덜하겠지만.

이정도쯤 했으면 나머지 고급 기능은 직접 부딪히면서 배울 수 있을 기초 체력은 만들었다고 본다. 컴포넌트가 늘다 보면 폴더 구조에 대해서 더 고민할 수도 있을 거고, 그 고민의 해결이 필요하다면 기술 스택이 차곡차곡 쌓여있는 보일러플레이트들을 찾아보는 것도 좋다.


## Go Forward or Not
이렇게 2017년의 자바스크립트에 적응한 과정을 장황하게 적어보았다. 물론 이 글에 소개되지 않은 것들도 많다. '옛날 사람'을 탈출하기 위해 최신 웹 기술에 어떤 것이 있는지 알고싶은 분들이 처음 만나기에는 어울리지 않을 것 같은 주제들은 과감히 생략했기 때문이다. 가령, 성능 최적화 문제라든지, JS를 대체하고 싶어하는 언어들(사실 TypeScript는 지금 접하셔도 나쁘지 않을 것 같긴 하지만...), 그리고 ReactiveX와 함께 살짝 언급만 했던 이벤트 기반 개발 등에 대한 이야기는 처음 최신 웹 기술을 접하시는 분들에게는 어울리지 않는다고 생각했다. 이 내용들은 추후 다른 글로 소개 할 예정이다.

여튼, 최신 웹 기술은 여러분이 생각하시는 것만큼 매일매일이 늘 새로운 원더랜드인 것은 아니다. 이 글에서 자주 언급된 React는 4년 전에 나온 기술이고, ReactiveX는 그보다 한참 전에 나왔다. 물론 Redux는 2년도 살짝 덜 된 기술이란 점, 그리고 grunt 및 gulp같은 '누구나 다 쓰던' 태스크 러너가 순식간에 버림받은 사례가 마음에 걸리긴 하다. 그러나 성숙하고 자리잡은 기술이 당장 버려지는 사례는 정말 많지 않다.

그러니, 웹에 관심이 있으시다면 지금 당장 지금의 기술에 도전해보자. IE8 지원을 끊는 것을 심각하게 고민해볼 수 있는 지금같은 시점에, jQuery로 고통받기에 당신의 시간과 정신건강은 너무 아깝지 않은가.

#### 세 줄 요약
* ES2015에 적응하자.
* 프레임워크는 상황에 맞춰 고르자.
* 프레임워크는 만들면서 배우자. 지금 시작하셔도 늦지 않다.
