# 💾 유튜브 클론 코딩

[프로젝트 링크](https://yeol17.github.io/youtube-clone/)

유튜브 데이터 API로 실제 서비스의 메인 화면을 클론 코딩한 프로젝트로,  
강의와 같은 타인의 도움 없이 혼자 힘으로 실제 서비스를 보며 고민해 완성한 결과물입니다.


|메뉴|
|---|
|<img src="https://github.com/Yeol17/youtube-clone/assets/97844334/00e08daa-0de9-437a-a44a-1b27413e335e" width="400px">|

|설정|
|---|
|<img src="https://github.com/Yeol17/youtube-clone/assets/97844334/e51076c1-4d9d-4131-8651-cad25958e25d" width="400px">|

|컨텐츠|
|---|
|<img src="https://github.com/Yeol17/youtube-clone/assets/97844334/3de0babc-f70c-43b7-b095-67473bfa6eb6" width="400px">|

## 개요
- 개인 프로젝트
- 23.06 ~
- [기록](https://1sy.notion.site/Youtube-3d83a0bcde9240ac9876d99dcc268cf0?pvs=4)

## 목적
- React의 전반적인 사용법을 익힌다
- REST API 경험  
- Redux를 사용해 상태를 관리해 보기  
- Axios로 비동기 네트워크 요청해 보고 요청 결과를 다루어 화면에 렌더링 

## 스킬
- React, Redux, Axios, SCSS

## 내용
- Youtube Data를 비동기로 요청하고 응답받은 데이터를 가공·렌더링.
- [설정]-[메인: 변경가능한 값]-[서브] 의 구조인 메뉴에서 서브를 클릭하면 '변경가능한 값' 변경되도록 리덕스로 상태를 관리
  - 의도: 예를 들어 다국어 모드가 필요한 경우 [메인] 컴포넌트의 국가명 상태만 바뀔 것이 아니라  
    전역적으로 이 상태값이 관리되어서 다른 컴포넌트에 영향을 끼쳐야 하지 않을까 라는 생각을 했다.
  - 느낀점: 간단한 프로젝트라면 코드량이 늘어나서 번거로운거 같다고 느꼈다.  
   하지만 규모가 크고 협업을 해야하는 상황이라면 리덕스로 엄격하게 관리하며 상태의 변화 일관적으로 처리하는게 이점이 있을거 같다는 생각이 들었다.
