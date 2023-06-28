
import { IoSettingsOutline } from "react-icons/io5";
import { BsSendExclamation } from "react-icons/bs";
import { RiShieldUserLine, RiMoonLine } from "react-icons/ri";
import { MdTranslate, MdOutlineKeyboardAlt, MdOutlineAdminPanelSettings } from "react-icons/md";
import { SlQuestion } from "react-icons/sl";
import { CiGlobe } from "react-icons/ci";
import './MainMenu.scss'
import MenuItem from './MenuItem';


export default function SettingMain({ theme, langs, onClickMenu, isLimited }) {
  
  return (
    <ul className="main-menu">
      <li className="section1">
        <div className='section-container'>
          <MenuItem itm={settings[0]}></MenuItem>
        </div>
      </li>
      <li className="section2">
        <div className='section-container'>
          <MenuItem itm={settings[1]} itmVal={theme.selected} onClickMenu={onClickMenu}/>
          <MenuItem itm={settings[2]} itmVal={langs.selected} onClickMenu={onClickMenu}/>
          <MenuItem itm={settings[3]} itmVal={isLimited ? '사용 중': '사용 안함'} onClickMenu={onClickMenu}/>
          <MenuItem itm={settings[4]} onClickMenu={onClickMenu}/>
          <MenuItem itm={settings[5]} />
        </div>
      </li>
      <div className="section3">
        <div className="section-container">
          <MenuItem itm={settings[6]} />
        </div>
      </div>
      <div className="section4">
        <div className="section-container">
          <MenuItem itm={settings[7]} />
          <MenuItem itm={settings[8]} />
        </div>
      </div>
    </ul>
  )
}

const settings = [
  { id: 0, title: 'Youtube의 내 데이터', icn: <RiShieldUserLine /> },
  { id: 1, title: '디자인:', icn: <RiMoonLine />, more: 'theme' },
  { id: 2, title: '언어: ', icn: <MdTranslate />, more: 'langs' },
  { id: 3, title: '제한 모드: ', icn: <MdOutlineAdminPanelSettings />, more: 'limit' },
  { id: 4, title: '위치:', icn: <CiGlobe />, more: 'location' },
  { id: 5, title: '단축키', icn: <MdOutlineKeyboardAlt /> },
  { id: 6, title: '설정', icn: <IoSettingsOutline /> },
  { id: 7, title: '고객센터', icn: <SlQuestion /> },
  { id: 8, title: '의견 보내기', icn: <BsSendExclamation /> },
]
