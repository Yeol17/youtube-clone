# 💾 유튜브 클론 코딩
실제 서비스의 메인 페이지를 보며 최대한 비슷하게 구현  
<table>
<tr>
<td><img src="https://github.com/Yeol17/youtube-clone/assets/97844334/ac16b280-b9b6-405e-9424-2767e13f50e9" width="400px"></td>
<td><img src="https://github.com/Yeol17/youtube-clone/assets/97844334/9a7052c2-7694-4529-bc26-35c3c01644f8" width="400px"></td>
<td><img src="https://github.com/Yeol17/youtube-clone/assets/97844334/d6ae8503-b7ce-4017-9c1a-5a8a5cc11661" width="400px"></td>
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
      <img src="https://github.com/Yeol17/youtube-clone/assets/97844334/a43aad20-9866-4177-a844-7db023085e8c" width="150px"
    </td>
      <td>
        <img src="https://github.com/Yeol17/youtube-clone/assets/97844334/ab09aa1e-9e3e-4afd-8007-84e4d2fb8d78" width="150px">
      </td>
    <td>
      <img src="https://github.com/Yeol17/youtube-clone/assets/97844334/b17689d6-59da-4a08-b335-3f7963f67950" width="150px">
    </td>
    <td>
      <img src="https://github.com/Yeol17/youtube-clone/assets/97844334/94796f77-1a4d-4b53-a3d4-8629f81d0120" width="150px">
    </td>
  </tr>
</table>


## 개발 내용 과 느낀점
### REST API  
axios로 리소스를 요청해 응답받은 결과(max=50)로 채널의 정보에 대한 리소스를 재요청.  
요청한 리소스에 nextPageToken이라는 값을 이용해 재요청을 해서 200개의 리소스를 확보해서 화면에 렌더링.  

**느낀점**  
  비동기 요청한 결과를 useState로 바꾸려고 해도 상태가 바뀌지 않아 난항을 겪었습니다.  
  그래서 동기/비동기에 대해 살펴 보았고 비동기의 후속 처리를 위해 콜백 패턴을 사용하는데 이 때 콜백 패턴의 뎁스가 깊어지면 그 유명한 콜백헬이라는 개념이 여기에서 비롯된 거라는걸 알았습니다.
  그래서 이 문제를 해결 하기 위한게 Promise, Promise의 후속 처리 메서드(then, catch)이지만 콜백 패턴을 벗어나지 못하고 이를 좀 더 개선한것이 async/await라는걸 알았습니다.  
  키워드로만 공부했을 때는 이해도 쉽지 않고 금새 잊혀지는데 직접 구현을 통해 문제를 겪어보니 이해의 정도가 이론만 공부했을 때보다는 수 배는 더 높았습니다.
  
### Lazy load  
  우선 공통의 공백 컴포넌트를 렌더링하고 Intersection observer를 활용해 기준점인 뷰포트에 타겟인 요소가 교차하면 이를 감지해 데이터가 있는 컴포넌트를 렌더링 합니다.

**느낀점**
  맨처음 렌더링 시, 한 줄에 3개 총 2줄이 렌더링 되는데 이 두 줄에 같은 데이터가 들어오는 상황이 발생했다.
  익숙하지 않은 api라 사용법의 문제인지 아니면 컴포넌트의 구조상의 문제인지 헤맸는데 
