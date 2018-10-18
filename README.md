# Mesh Korea Makers Blog

메쉬코리아에서 기술, 유저 경험 및 공간 디자인, 서비스 기획 등 물류플랫폼을 만들기 위한 과정에 대한 고민과 그 해결을 담은 블로그입니다.

## 무엇으로 만들어졌나요?

이 블로그는 markdown으로 작성된 글을 HTML static page로 변환해 서버 없이 정적 페이지 호스팅만으로 작동할 수 있게 만들어져 있습니다. 이를 위해 다음 기술을 사용합니다.

* [Gatsby](https://www.gatsbyjs.org)
* [React](https://reactjs.org)
* [GraphQL](https://graphql.org)
* 그 외 Gatsby의 각종 dependencies
* 이를 작동하기 위한 [node.js](https://nodejs.org)
* 그리고 Github Repository를 호스팅해주는 [Github Pages](https://pages.github.com)

## 기여하기

### 준비물

1. 글
2. 글을 대표할 수 있는 일러스트 또는 사진: 주변 디자이너 분들이나 플랫폼셀 최태건에게 문의해주세요!


### 글 작성하기

#### 1. markdown 사용에 익숙하지 않으신가요?

Makers Blog는 [Github Flavored Markdown](https://github.github.com/gfm/)을 사용합니다. 문법은 어렵지 않으니, 금방 배우실 수 있을 겁니다.

하지만 처음에는 어색하실 수 있죠. 그럴 때엔 [온라인 마크다운 에디터](https://stackedit.io/app)로 마크다운 문법을 자동으로 삽입해주는 버튼들과 함께 마크다운을 작성해보세요. macOS를 사용하신다면, Bear의 Markdown Compatibility 모드로 작성하셔도 좋습니다.

어느 정도 글을 작성하셨다면 **2. markdown 사용에 익숙하신가요?** 의 내용을 참고하셔서 글을 완성해주시면 됩니다.

#### 2. markdown 사용에 익숙하신가요?

1. 글을 markdown으로 작성해주세요.
2. 폴더를 만들어주시고, 폴더 안에 글을 `index.md`로 저장해주세요.
3. 삽입될 이미지는 다음 형식으로 준비해주세요.
  * 인링크로 삽입하실 경우: 2에서 만든 폴더 안에 이미지를 넣고, 마크다운에서 상대경로로 이미지를 삽입합니다.
  ```markdown
  ![alternative text](./file-name.extension)
  ```
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
author: (저자 ID: 이름. 동명이인이 있을 경우 이름 뒤에 회사에서 사용하는 알파벳을 붙입니다. ex. 홍길동A)
titleImage: (준비된 일러스트/사진의 상대 경로)
link: (See also에 보여줄 링크, Optional)
linkDesc: (See also에 보여줄 링크의 설명, Optional)
github: (github repo 링크, optional)
appstore: (app store 앱 페이지 링크, optional)
playstore: (play store 앱 페이지 링크, optional)
---
```

### 글 추가하기

#### 1. 커맨드 라인에 익숙하신가요?

다음 플로우를 따라가시면 됩니다.

**git이 컴퓨터에 반드시 설치돼있어야 하며, [node.js가 설치](https://nodejs.org/en/)돼있어야 합니다.** node.js는 공식 패키지 외에도 homebrew 등으로 설치하셔도 무관합니다.

1. 이 블로그의 소스코드를 체크아웃합니다.
    ```bash
    $ git clone git@github.com:meshkorea/meshkorea.github.io.git
    ```
    * 가급적이면 소스코드 폴더를 [Visual Studio Code](https://code.visualstudio.com)로 여시는 것을 추천드립니다.
2. `dev` 브랜치를 체크아웃하신 뒤, 새 브랜치를 분리합니다. 새 브랜치명은 가급적 포스트 슬러그로 지정합니다.
    ```bash
    (source_code_root)$ git checkout dev
    (source_code_root)$ git checkout -b (post-slug)
    ```
3. 글을 `content`에 추가합니다.
    1. 소스코드 하위의 `src/content` 폴더 하위에 새로운 폴더를 추가합니다.
    2. 이 때, 폴더명이 글의 주소가 됩니다. (ex. 폴더명이 `a-new-folder`일 경우 `https://meshkorea.github.io/a-new-folder`로 접속 가능)
    3. 이 폴더에 위에서 만든 폴더의 내용물을 복사해 넣습니다.
4. (글을 처음 작성하시는 경우) 저자 등록하기
    1. 소스코드 하위의 `src/content/avatars` 폴더에 자신의 사진(정사각형)을 추가합니다.
    2. 소스코드 하위의 `src/content/author.yaml`을 엽니다.
    3. 다음의 형식으로 맨 아래에 저자 정보를 입력합니다.
    ```yaml
    - id: (이름. 동명이인이 있을 경우 글 작성하기에서 입력한 대로, 이름 뒤에 회사에서 사용하는 알파벳을 붙입니다. ex. 홍길동A)
      name: (블로그를 방문하는 사람들에게 보여질 이름. ex. 홍길동)
      avatar: avatars/(추가한 파일명) (없을 경우 avatars/picture.sample.png)
      bio: (한줄 자기소개)
    ```
5. 코드를 빌드해보고 글이 잘 추가되었나 확인해봅니다.
    1. 코드를 빌드하기 전에 코드 빌드에 필요한 dependencies를 설치해야 합니다. [yarn을 설치](https://yarnpkg.com/en/docs/install)합니다.
    2. yarn으로 의존성이 있는 패키지를 설치하고, 소스 코드를 빌드합니다.
    ```bash
    (source_code_root)$ yarn && yarn start
    ```
    3. 설치가 완료된 후 빌드 및 개발서버가 [http://localhost:8000](http://localhost:8000)에 실행됩니다. 웹 브라우저에서 확인합니다.
    4. 이상이 있는 경우, 문제가 있는 부분을 수정합니다.<br>이상이 없는 경우, 개발서버를 종료(`ctrl` + `c`)한 후 다음 단계를 수행합니다.
6. 이제 글을 발행할 준비가 완료되었으니, 소스코드를 커밋하고 브랜치를 발행합니다.
    ```bash
    (source_code_root)$ git add *
    (source_code_root)$ git commit -am "Add a new post: (post-title)"
    (source_code_root)$ git push -u origin head
    ```
7. [Pull Request를 생성합니다.](https://github.com/meshkorea/meshkorea.github.io/pulls)<br>
    `dev` 베이스로 &lt;- **2**에서 새로 만든 브랜치를 머지하면 됩니다.<br>이때 PR Description에 `@mindfull`을 태그하거나 리뷰 검토 대상자로 지정해 플랫폼셀 최태건에게 알려주세요.
8. PR이 완료되면 다음 방법으로 deploy됩니다. (직접 하진 않으셔도 됩니다.)
    ```bash
    (source_code_root)$ git checkout dev && git pull
    (source_code_root)$ yarn deploy
    ```
9. 수고 많으셨습니다.

#### 2. 커맨드 라인에 익숙하지 않으신가요?

주위 개발자에게 도움을 요청하세요!
