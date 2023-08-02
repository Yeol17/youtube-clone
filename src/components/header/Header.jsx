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
  let [mainOpened, setMainOpened] = useState(false);
  let [isSub, setIsSub] = useState(false)


  const onClickSetting = () => {
    console.log('onClickSetting');
    setSettingMain(!settingMain);
    if (settingSubType) {
      setSettingMain(false)
      setSettingSubType('');
    }
  }
  const onClickDoc = () => {
    console.log('onClickDoc', mainOpened, isSub);
    if (!isSub) {
      if (!mainOpened) {
        return
      } else {
        setSettingMain(false);
      }
      return
    }
    else {
      setIsSub(false)
      setSettingSubType('');
    }
  }

  const onClickMenu = (more) => {
    setSettingMain(false);
    setSettingSubType(more);
    console.log('onClickMEnu');
  }
  const onClickBackward = () => {
    setIsBackward(true);
    setSettingMain(true);
    setSettingSubType('');
  }
  const onClickModeChange = (v) => {
    setMode(v);
  }

  useEffect(() => {
    document.addEventListener('click', onClickDoc);
    return () => {
      document.removeEventListener('click', onClickDoc)
    }
  }, [mainOpened, isSub])

  useEffect(() => {
    console.log('useEffect2');
    if (settingMain) {
      setMainOpened(true);
    } else {
      setMainOpened(false)
    }

    if (settingSubType) {
      setIsSub(true)
    } else {
      setIsSub(false)
    }
  }, [settingMain, settingSubType])

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

              <button type="button" className="btn--setting" onClick={() => {
                onClickSetting()
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

