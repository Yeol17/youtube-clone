# 💾 유튜브 클론 코딩

https://yeol17.github.io/youtube-clone/

실제 서비스의 메인 페이지를 보며 최대한 비슷하게 구현  

<table>
<tr>
<td><img src="https://github.com/Yeol17/youtube-clone/assets/97844334/00e08daa-0de9-437a-a44a-1b27413e335e" width="400px"></td>
<td><img src="https://github.com/Yeol17/youtube-clone/assets/97844334/e51076c1-4d9d-4131-8651-cad25958e25d" width="400px"></td>
<td><img src="https://github.com/Yeol17/youtube-clone/assets/97844334/3de0babc-f70c-43b7-b095-67473bfa6eb6" width="400px"></td>
</tr>
</table>


## 개요
- 개인 프로젝트
- 23.06 ~ 23.08 (약 1달 반)


## 프로젝트 목적
1. 리액트 사용 경험과 숙련도 향상
2. Redux를 이용한 상태관리를 경험
3. SCSS 의 사용 경험
4. Axios를 사용해 REST API 호출을 해보고 응답받은 리소스를 다루어 보기


## Skills
<table>
  <tr>
    <td>
      <img src="https://github.com/Yeol17/youtube-clone/assets/97844334/cd68f282-c47c-4ace-a773-b53899dab099" width="150px"
    </td>
      <td>
        <img src="https://github.com/Yeol17/youtube-clone/assets/97844334/b0f78aa4-ed03-4e73-bd6d-c6fabc09e885" width="150px">
      </td>
    <td>
      <img src="https://github.com/Yeol17/youtube-clone/assets/97844334/c9194f6a-092d-459f-8e1b-b5e0cc9d3eb7" width="150px">
    </td>
    <td>
      <img src="https://github.com/Yeol17/youtube-clone/assets/97844334/e65ab8ad-05a9-4fee-9c02-ef9ebae6ff9f" width="150px">
    </td>
  </tr>
</table>


## 개발 내용
### REST API  
Axios로 API 요청 응답 받은 가장 인기 있는 영상들에 대한 리소스(max=50)로 채널에 대한 리소스를 재요청합니다.
이 같은 방식으로 요청한 리소스에 nextPageToken값으로 3번의 호출 통해 200개의 리소스를 useState훅으로 관리해서 화면에 렌더링 했습니다.  

### 컴포넌트 레이지 로드
우선 공통의 공백 컴포넌트를 렌더링하고 Intersection observer를 활용해 기준점인 뷰포트에 타겟인 요소가 교차하면 이를 감지해 데이터가 있는 컴포넌트를 렌더링 합니다.

### 설정 메뉴
우측 상단 설정 아이콘을 클릭하면 메뉴가 뜨고 [위치: 한국] 과 같이 선택된 값을 반영하도록 부제가 있는 항목들은 redux를 활용해 상태의 초깃값을 설정해 줬습니다.
이 메뉴들을 클릭하면 위치 같은 경우 각 국가들을 선택하는 창이 뜨는데 "스페인" 클릭 시 [위치: 스페인] 과 같이 바뀌게 됩니다.
실제로 표현 언어가 바뀌는 다국어 처리는 향후 개발 예정입니다.


