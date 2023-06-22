import './Header.scss';

// 아이콘
import { AiOutlineMenu, AiOutlineMore } from "react-icons/ai";
import { MdMic, MdTranslate, MdOutlineKeyboardAlt, MdOutlineAdminPanelSettings } from "react-icons/md";
import { SlMagnifier, SlQuestion, SlArrowRight } from "react-icons/sl";
import { CiGlobe } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { BsSendExclamation } from "react-icons/bs";
import { RiShieldUserLine, RiMoonLine } from "react-icons/ri";

// 컴포넌트
import MainMenu from './MainMenu';
import LoginBtn from '../LoginBtn';

export default function Header() {
  return (
    <>
      <header>
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

              <button type="button" className="btn--setting">
                <AiOutlineMore />
              </button>
              
              <MainMenu settings={settings} />

            </div>

            <LoginBtn icn={<VscAccount />} />

          </div>
        </div>

      </header>
    </>
  )
}

const settings = [
  [
    { id: 0, title: 'Youtube의 내 테이터',icn: <RiShieldUserLine />, more: false }
  ],
  [
    { id: 1, title: '디자인: 기기 테마', icn: <RiMoonLine/>, more: true },
    { id: 2, title: '언어: 한국어', icn: <MdTranslate/>, more: true },
    { id: 3, title: '제한 모드: 사용 안함', icn: <MdOutlineAdminPanelSettings/>, more: true },
    { id: 4, title: '위치: 한국', icn: <CiGlobe/>, more: true },
    { id: 5, title: '단축키', icn: <MdOutlineKeyboardAlt/>, more: true },
  ],
  [
    { id: 6, title: '설정', icn: <IoSettingsOutline />, more: false }
  ],
  [
    { id: 7, title: '고객센터', icn: <SlQuestion />, more: false },
    { id: 8, title: '의견 보내기', icn: <BsSendExclamation />, more: false }
  ]
]