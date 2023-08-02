import './Header.scss';

// 아이콘
import { AiOutlineMore } from "react-icons/ai";
import { MdMic } from "react-icons/md";
import { SlMagnifier } from "react-icons/sl";


//hooks
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// 컴포넌트
import SettingMain from './SettingMain';
import SettingSub from './SettingSub';
import LoginBtn from '../LoginBtn';
import Menu from '../Menu';
export default function Header({ onClickNavIcn }) {

  let theme = useSelector(state => state.theme);
  let langs = useSelector(state => state.langs);
  let limit = useSelector(state => state.limit);
  let location = useSelector(state => state.location);

  let [settingMain, setSettingMain] = useState(false);
  let [isBackward, setIsBackward] = useState(false)
  let [settingSubType, setSettingSubType] = useState('');
  let [mode, setMode] = useState(false);
  let [isSettingSub, setIsSettingSub] = useState(false);

  const onClickDocument = (e) => {
    // document에 클릭 이벤트가 달려 있기 때문에
    // 아래의 onClickBackward, onClickMenu 함수를 실행 후
    // onClickDocument 함수가 실행되어 원치 않는 동작(설정 창들이 의도와 다르게 작동)을
    // 제어하기 위해 isBackward, isSettingSub 와 같은 새로운 상태를 만들어 제어문을 작성 했다.
    if (isBackward) return setIsBackward(false)
    setSettingMain(false);
    if (isSettingSub) return setIsSettingSub(false)
    setSettingSubType('');
  }
  
  const onClickMenu = (more) => {
    setSettingMain(false);
    setSettingSubType(more);
    setIsSettingSub(true)
  }
  const onClickBackward = () => {
    setIsBackward(true);
    setSettingMain(true);
    setSettingSubType('');

  }
  const onClickModeChange = (v) => {
    setMode(v);
  }

  // 설정창 외부 클릭 시, 설정이 닫히게
  useEffect(() => {
    document.addEventListener('click', onClickDocument);
    return () => document.removeEventListener('click', onClickDocument)
  },[])

  return (
    <>
      <header className='header'>
        <div className="container">
          <Menu onClickNavIcn={onClickNavIcn} />

          <div className="center">
            <form action="#" method="get" className="search-form">
              <div className="search">
                <SlMagnifier />
              </div>
              <label htmlFor="search-bar"></label>
              <input type="text" className="search-bar" name="search-bar" id="search-bar" placeholder='검색' />
            </form>
            <button type="button" className="btn--search">
              <SlMagnifier />
            </button>
            <button type="button" className="voice-search" title="음성으로 검색">
              <MdMic />
            </button>
          </div>

          <div className="end">
            <div className="settings">

              <button type="button" className="btn--setting" onClick={(e) => {
                e.stopPropagation();
                setSettingMain(!settingMain);
                if (!isSettingSub) {
                  setIsSettingSub(false);
                  setSettingSubType('');
                }
              }}>
                <AiOutlineMore />
              </button>

              {settingMain &&
                <SettingMain
                  location={location}
                  limit={limit}
                  langs={langs}
                  theme={theme}
                  onClickMenu={onClickMenu}
                  setSettingMain={setSettingMain}
                  settingMain={settingMain}
                />}
              {settingSubType &&
                <SettingSub
                  setSettingSubType={setSettingSubType}
                  settingSubType={settingSubType}
                  onClickBackward={onClickBackward}
                  onClickModeChange={onClickModeChange}
                  langs={langs}
                  theme={theme}
                  limit={limit}
                  location={location}
                  mode={mode}
                />}

            </div>

            <LoginBtn />

          </div>
        </div>

      </header>
    </>
  )
}

