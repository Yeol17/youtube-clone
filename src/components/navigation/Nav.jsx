import './Nav.scss'

import {
  MdSubscriptions, MdOutlineSubscriptions,
  MdOutlineVideoLibrary, MdHome, MdOutlineHome,
  MdVideoLibrary, MdOutlineFlag, MdFlag, MdHelpOutline
} from 'react-icons/md'
import {
  IoMusicalNoteOutline, IoMusicalNoteSharp,
  IoTrophySharp, IoTrophyOutline, IoSettingsOutline
} from 'react-icons/io5'
import { TbBrandYoutubeKids } from 'react-icons/tb'
import { VscHistory } from 'react-icons/vsc'
import { HiOutlineFire, HiFire } from 'react-icons/hi2'
import { RiMovie2Line, RiMovie2Fill } from 'react-icons/ri'
import { BiCommentError } from 'react-icons/bi'
import { CiStreamOn } from 'react-icons/ci'
import { SiYoutubegaming, SiYoutubemusic } from 'react-icons/si'
import {
  AiOutlineShopping, AiFillShopping,
  AiOutlineYoutube, AiFillYoutube,
  AiFillBulb, AiOutlineBulb, AiOutlinePlusCircle
} from 'react-icons/ai'

import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LoginBtn from '../LoginBtn'

export function NavMax() {
  let location = useLocation();
  let [page, setPage] = useState(location.pathname);
  let [login, setLogin] = useState(false);
  let lists;
  let classifiedBySection = []

  // i = 2
  // i * 100 <= id < (i+1) * 100
  // 200 =< id < 300
  // 300 =< id < 400

  for (let i = 1; i <= 6; i++) {
    let tmp = [];
    for (let j = 0; j < navigation.length; j++) {
      if (navigation[j].id < (i + 1) * 100 && navigation[j].id >= i * 100) {
        tmp.push(navigation[j]);
      }
    }
    classifiedBySection.push(tmp);
  }

  lists = classifiedBySection.map((section, i) => {
    return (
      <div className="wrap" key={i}>
        {section.map(el => {
          return (
            <Link to={el.url} className="max-itm" key={el.id}>
              <div className="icn">{page === el.url ? (el.active || el.inactive) : el.inactive}</div>
              <div className="tit">{el.title}</div>
            </Link>
          )
        })}
      </div>
    )
  })

  useEffect(() => {
    setPage(location.pathname);
  }, [location])

  return (
    <nav>
      <div className="bg"></div>
      <div className="container">
        <div></div>
        <ul className="menu-max">
          <li className="section">
            {lists[0]}
          </li>
          <li className="section">
            {lists[1]}
          </li>
          {login ? 1
            : <li className="section" >
              <div className="wrap">
                <p className="text">
                  로그인면 동영상에 좋아요<br />
                  를 표시하고 댓글을 달거나<br />
                  구독할 수 있습니다.
                </p>
                <LoginBtn />
              </div>
            </li>
          }
          <li className="section">
            <div className="tit">탐색</div>
            {lists[2]}
          </li>
          <li className="section">
            {lists[3]}
          </li>
          <li className="section">
            <div className="tit">Youtube 더보기</div>
            {lists[4]}
          </li>
          <li className="section">
            {lists[5]}
          </li>
          <li className="section guide">
            <div className="prime">
              <div>
                <span className="mr-8">정보</span>
                <span className="mr-8">보도자료</span>
                <span className="mr-8">저작권</span>
              </div>
              <div>
                <span className="mr-8">문의하기</span>
                <span className="mr-8">크리에이터</span>
                <span className="mr-8">광고</span>
              </div>
              <div>개발자</div>
            </div>
            <div className="secondary">
              <div>
                <span className="mr-8">약관</span>
                <span className="mr-8">개인정보처리방침</span>
                <span className="mr-8"></span>
              </div>
              <div className='mr-8'>정책 및 안전</div>
              <div className="mr-8">
                <span className="bold">YouTube</span> 작동의 원리
              </div>
              <div className="mr-8">새로운 기능 테스트하기</div>
            </div>
            <div className="copy">
              <div>
                <span className="bold">© 2023 Google LLC, Sundar Pichai,
                  1600 Amphitheatre Parkway,
                  Mountain View CA 94043, USA,
                  0807-882-594 (무료), yt-support-
                  solutions-kr@google.com, 호스팅:
                  Google LLC,</span> <a href="/#" className="link">사업자정보</a>, <a href="/#"  className="link">불법촬영물
                  신고</a>
              </div>
              <div>크리에이터들이 유튜브 상에 게시, 태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한 제품들을 판매하지 않으며, 그에 대한 책임을 지지 않습니다</div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export function NavMin() {

  let location = useLocation();
  let [page, setPage] = useState(location.pathname);

  useEffect(() => {
    setPage(location.pathname);
  }, [location])

  let lists = [];

  for (let i = 0; i < 5; i++) {
    lists.push(
      <li className='min-itm' key={navigation[i].id}>
        <Link to={navigation[i].url} className='menu-min'>
          <div className="icn">{page === navigation[i].url ? navigation[i].active : navigation[i].inactive}</div>
          <p className='text'>{navigation[i].title}</p>
        </Link>
      </li>
    )
  }

  return (
    <nav>
      <ul className="min">
        {lists}
      </ul>
    </nav>
  )
}


const navigation = [
  { id: 100, title: '홈', url: '/', active: <MdHome />, inactive: <MdOutlineHome /> },
  { id: 101, title: 'shorts', url: '/shorts', active: <AiFillYoutube />, inactive: <AiOutlineYoutube /> },
  { id: 102, title: '구독', url: '/feed/subscription', active: <MdSubscriptions />, inactive: <MdOutlineSubscriptions /> },
  { id: 200, title: '보관함', url: '/feed/library', active: <MdVideoLibrary />, inactive: <MdOutlineVideoLibrary /> },
  { id: 201, title: '시청 기록', url: '/feed/history', active: <VscHistory className='bold' />, inactive: <VscHistory /> },
  { id: 301, title: '인기 급상승', url: '/feed/trending', active: <HiFire />, inactive: <HiOutlineFire /> },
  { id: 302, title: '쇼핑', url: '/channel/shoping', active: <AiFillShopping />, inactive: <AiOutlineShopping /> },
  { id: 303, title: '음악', url: '/channel/music', active: <IoMusicalNoteSharp />, inactive: <IoMusicalNoteOutline /> },
  { id: 304, title: '영화', url: '/channel/movie', active: <RiMovie2Fill />, inactive: <RiMovie2Line /> },
  { id: 305, title: '실시간', url: '/channel/live', active: <CiStreamOn className='bold' />, inactive: <CiStreamOn /> },
  { id: 306, title: '게임', url: '/channel/gaming', active: <SiYoutubegaming />, inactive: <SiYoutubegaming className="void" /> },
  { id: 307, title: '스포츠', url: '/channel/sports', active: <IoTrophySharp />, inactive: <IoTrophyOutline /> },
  { id: 308, title: '학습', url: '/channel/learning', active: <AiFillBulb />, inactive: <AiOutlineBulb /> },
  { id: 400, title: '채널 탐색', url: '/feed/guide_builder', active: <AiOutlinePlusCircle classNAme="bold" />, inactive: <AiOutlinePlusCircle /> },
  { id: 500, title: 'YouTube Premium', url: '/premium', active: <AiFillYoutube style={{ fill: 'red' }} />, inactive: <AiFillYoutube style={{ fill: 'red' }} /> },
  { id: 501, title: 'YouTube Music', url: '/premium', active: <SiYoutubemusic style={{ fill: 'red' }} />, inactive: <SiYoutubemusic style={{ fill: 'red' }} /> },
  { id: 502, title: 'YouTube Kids', url: '/kids', active: <TbBrandYoutubeKids style={{ fill: 'red' }} />, inactive: <TbBrandYoutubeKids style={{ fill: 'red' }} /> },
  { id: 600, title: '설정', url: '/accounts', active: <IoSettingsOutline />, inactive: <IoSettingsOutline /> },
  { id: 601, title: '신고 기록', url: '/reporthistory', active: <MdFlag />, inactive: <MdOutlineFlag /> },
  { id: 602, title: '고객센터', active: '', inactive: <MdHelpOutline /> },
  { id: 603, title: '의견 보내기', active: '', inactive: <BiCommentError /> },
];
