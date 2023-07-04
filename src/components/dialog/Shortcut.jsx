import { useEffect, useState } from 'react';
import './Shortcut.scss'
import { useDispatch } from 'react-redux';
import { shortcutChange } from '../../store/popUpStateSlice';
export default function Shortcut() {

  let [contentHeight, setContHeight] = useState(0);
  
  const dispatch = useDispatch();
  const onResized = (e) => {
    setContHeight(window.innerHeight - 144)
  }

  // 동적인 컨펜트 영역 사이즈 조절
  useEffect(() => {
    window.addEventListener('resize', onResized)
    return () => {
      window.removeEventListener('resize', onResized)
    }
  }, [])

  const shortcut = shortcuts.map((short) => {
    return (
      <div className="list" key={short.id}>
        <div className="subtitle">{short.subtitle}</div>
        {short.shortkey.map((s) => {
          return (
            <div className="desc" key={s.id}>
              <div className="text">{s.t}</div>
              <div className="key">{s.k}</div>
            </div>
          )
        })}
      </div>
    )
  })

  return (
    <div className="shortcut">
      <div className="_sheader">
        <h5 className="title">단축키</h5>
      </div>
      <div className="_scontents" style={{ ...contentHeight !== 0 ? { maxHeight: contentHeight } : null }}>
        <div className="container">
          {shortcut}
        </div>
      </div>
      <div className="_sfooter">
        <button className="dialog-close" type="button" onClick={(e) => {
          e.stopPropagation()
          dispatch(shortcutChange());
        }}>닫기</button>
      </div>
    </div >
  )
}

const shortcuts = [
  {
    id: 1, subtitle: '재생', shortkey: [
      { id: 100, t: '재생/일시중지 전환', k: 'k' },
      { id: 101, t: '10초 되감기', k: 'J' },
      { id: 102, t: '10초 앞으로 건너뛰기', k: 'l' },
      { id: 103, t: '이전 동영상', k: 'P(SHIFT+p)' },
      { id: 104, t: '다음 동영상', k: 'N(SHIFT+n)' },
      { id: 105, t: '이전 프레임(일시중지 상태)', k: ',' },
      { id: 106, t: '다음 프레임(일시중지 상태)', k: '.' },
      { id: 107, t: '재생 속도 느리게', k: '< (SHIFT+,)' },
      { id: 108, t: '재생 속도 빠르게', k: '< (SHIFT+.)' },
      { id: 109, t: '동영상의 특정 지점 탐색(7을 누르면 재생 시간의 70% 지점으로 이동)', k: '0..9' },
      { id: 110, t: '이전 챕터 탐색', k: 'CONTROL + ←' },
      { id: 111, t: '다음 챕터 탐색', k: 'CONTROL + →' },
    ]
  },
  {
    id: 2, subtitle: '일반', shortkey: [
      { id: 200, t: '전체화면 전환', k: 'f' },
      { id: 201, t: '영화관 모드 전환', k: 't' },
      { id: 202, t: '소형 플레이어 전환', k: 'i' },
      { id: 203, t: '소형 플레이어 또는 현재 대화상자 닫기', k: 'Esc' },
      { id: 204, t: '음소거 전환', k: 'm' },
    ]
  },
  {
    id: 3, subtitle: '자막', shortkey: [
      { id: 300, t: '동영상이 자막을 지원하는 경우 자막 사용/사용 중지 전환', k: 'c' },
      { id: 301, t: '텍스트 불투명도 수준 조정', k: 'o' },
      { id: 302, t: '창 불투명도 수준 조정', k: 'w' },
      { id: 303, t: '글꼴 크기 늘리기', k: '+' },
      { id: 304, t: '글꼴 크기 줄이기', k: '-' },
    ]
  },
  {
    id: 4, subtitle: '360도 동영상', shortkey: [
      { id: 400, t: '위로 이동', k: 'w' },
      { id: 401, t: '왼쪽으로 이동', k: 'a' },
      { id: 402, t: '아래로 이동', k: 's' },
      { id: 403, t: '오른쪽으로 이동', k: 'd' },
      { id: 404, t: '확대', k: '숫자 패드의 + 또는 ]' },
      { id: 405, t: '축소', k: '숫자 패드의 - 또는 [' },
    ]
  },
];