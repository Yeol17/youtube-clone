import './Header.scss';

// 아이콘
import { AiOutlineMenu, AiOutlineMore } from "react-icons/ai";
import { MdMic } from "react-icons/md";
import { SlMagnifier } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";

//hooks
import { useState } from 'react';
import { useSelector } from 'react-redux';

// 컴포넌트
import SettingMain from './SettingMain';
import SettingSub from './SettingSub';
import LoginBtn from '../LoginBtn';

export default function Header() {

  let theme = useSelector(state => state.theme);
  let langs = useSelector(state => state.langs);
  let limit = useSelector(state => state.limit);
  let location = useSelector(state => state.location);

  let [settingMain, setSettingMain] = useState(false);
  let [settingSubType, setSettingSubType] = useState('');

  const onClickMenu = (more) => {
    setSettingSubType(more);
    setSettingMain(false);
  }
  const onClickBackward = (v) => {
    if (v === 'settingMain') {
      setSettingSubType('');
      setSettingMain(true);
    }
  }

  return (
    <>
      <header className='header'>
        <div className="container">
          <div className="start">
            <button type="button" className="menu-ico">
              <AiOutlineMenu />
            </button>
            <a href="/" className="wrapper">
              <h1 className="logo">유튜브</h1>
            </a>
          </div>

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

              <button type="button" onClick={() => {
                setSettingMain(!settingMain)
              }} className="btn--setting">
                <AiOutlineMore />
              </button>

              {settingMain &&
                <SettingMain
                  location={location}
                  limit={limit}
                  langs={langs}
                  theme={theme}
                  onClickMenu={onClickMenu}
                />}
              {settingSubType &&
                <SettingSub
                  setSettingSubType={setSettingSubType}
                  settingSubType={settingSubType}
                  onClickBackward={onClickBackward}
                  langs={langs}
                  theme={theme}
                  limit={limit}
                  location={location}
                />}

            </div>

            <LoginBtn icn={<VscAccount />} />

          </div>
        </div>

      </header>
    </>
  )
}

