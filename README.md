# 💾 유튜브 클론 코딩

https://yeol17.github.io/youtube-clone/

유튜브 API를 사용하여 실제 서비스의 메인 화면을 클론 코딩한 프로젝트
|메뉴|설정|컨텐츠|
|---|---|---|
|<img src="https://github.com/Yeol17/youtube-clone/assets/97844334/00e08daa-0de9-437a-a44a-1b27413e335e" width="400px">|<img src="https://github.com/Yeol17/youtube-clone/assets/97844334/e51076c1-4d9d-4131-8651-cad25958e25d" width="400px"></td>|<img src="https://github.com/Yeol17/youtube-clone/assets/97844334/3de0babc-f70c-43b7-b095-67473bfa6eb6" width="400px">|


## 개요
- 개인 프로젝트
- 23.06 ~ 23.08 (약 1달 반)


## 프로젝트 목적
1. 리액트 사용 경험과 숙련도 향상
2. Redux를 이용한 상태관리를 경험
3. SCSS 의 사용 경험
4. Axios를 사용해 REST API 호출을 해보고 응답받은 리소스를 다루어 보기


## Skills
|React|Redux|SCSS|AXIOS|
|---|---|---|---|
|<img src="https://github.com/Yeol17/youtube-clone/assets/97844334/cd68f282-c47c-4ace-a773-b53899dab099" width="150px">|<img src="https://github.com/Yeol17/youtube-clone/assets/97844334/b0f78aa4-ed03-4e73-bd6d-c6fabc09e885" width="150px">|<img src="https://github.com/Yeol17/youtube-clone/assets/97844334/c9194f6a-092d-459f-8e1b-b5e0cc9d3eb7" width="150px">|<img src="https://github.com/Yeol17/youtube-clone/assets/97844334/e65ab8ad-05a9-4fee-9c02-ef9ebae6ff9f" width="150px">|


## 개발 내용

https://1sy.notion.site/Youtube-3d83a0bcde9240ac9876d99dcc268cf0?pvs=4

### REST API  
Axios + async/await 문법을 사용해 동영상의 정보, 동영상이 올라온 채널의 정보를 요청.  
타임 스태프, 문자열의 조합으로 된 데이터를 Intl API, 메서드들로 가공해 동영상 목록을 렌더링.

### 컴포넌트 레이지 로드
데이터의 수만큼 공통의 공백 컴포넌트를 렌더링하고 Intersection observer를 활용해 기준점인 뷰포트에 타겟인 요소가 교차하면 이를 감지해 데이터가 있는 컴포넌트를 렌더링.

### 설정 메뉴
우측 상단 설정 아이콘을 클릭하면 메뉴가 뜨고 [위치: 한국] 과 같이 선택된 값을 반영하도록 부제가 있는 항목들은 redux를 활용해 상태의 초깃값을 설정해 줬습니다.  
이 메뉴들을 클릭하면 위치 같은 경우 각 국가들을 선택하는 창이 뜨는데 "스페인" 클릭 시 [위치: 스페인] 과 같이 바뀌게 됩니다.  
실제로 표현 언어가 바뀌는 다국어 처리는 향후 개발 예정입니다.


