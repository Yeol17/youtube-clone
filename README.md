# 💾 유튜브 클론 코딩

https://yeol17.github.io/youtube-clone/

유튜브 API를 사용하여 실제 서비스의 메인 화면을 클론 코딩한 프로젝트
|메뉴|설정|컨텐츠|
|---|---|---|
|<img src="https://github.com/Yeol17/youtube-clone/assets/97844334/00e08daa-0de9-437a-a44a-1b27413e335e" width="400px">|<img src="https://github.com/Yeol17/youtube-clone/assets/97844334/e51076c1-4d9d-4131-8651-cad25958e25d" width="400px"></td>|<img src="https://github.com/Yeol17/youtube-clone/assets/97844334/3de0babc-f70c-43b7-b095-67473bfa6eb6" width="400px">|


## 개요
- 개인 프로젝트
- 23.06 ~
- [개발 내용](https://1sy.notion.site/Youtube-3d83a0bcde9240ac9876d99dcc268cf0?pvs=4)



### REST API  
- Axios + async/await 문법을 사용해 동영상의 정보, 동영상이 올라온 채널의 정보를 요청합니다.
- 타임 스태프, 문자열의 조합으로 된 데이터를 Intl API, 메서드들로 가공해 동영상 목록을 렌더링합니다.

### 컴포넌트 레이지 로드
- 데이터의 수만큼 공통의 공백 컴포넌트를 렌더링하고 Intersection observer를 활용해 기준점인 뷰포트에 타겟인 요소가 교차하면 이를 감지해 데이터가 있는 컴포넌트를 렌더링합니다.

### 설정 메뉴
- 우측 상단 설정 아이콘을 클릭하면 [위치: 한국] 과 같이 메뉴가 뜨며 선택된 값을 반영하도록 부제가 있는 항목들은 redux를 활용해 상태를 관리 합니다. (위치, 야간 모드 등등 설정과 관련되 상태 값들은 설정 메뉴 컴포넌트에서만 쓰이는게 아니라 다른 컴포넌트에서도 필요로 할 수 있는 상태 값이라 생각 했고 useState, props로 관리하면 그 복잡도가 증가해 redux를 사용해 전역에서 관리하면 개발이 용이 할 것 같다고 생각 했습니다.)  
- 위치 설정 메뉴들을 클릭하면 국가를 선택하는 창이 뜨고 "스페인" 클릭 시 [위치: 스페인] 과 같이 바뀌게 됩니다.  
- 실제로 표현 언어가 바뀌는 다국어 처리는 향후 개발 예정.


