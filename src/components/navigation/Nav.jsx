import './Nav.scss'

import {
  MdSubscriptions, MdOutlineSubscriptions,
  MdOutlineVideoLibrary, MdHome, MdOutlineHome,
  MdVideoLibrary,
  MdOutlineFlag, MdOutlineVideogameAsset,
  MdMusicNote, MdOutlineLightbulb, MdHelpOutline,
  MdLocalFireDepartment
} from 'react-icons/md'
import { GoPlusCircle, GoHistory } from 'react-icons/go'
import { IoTrophyOutline } from 'react-icons/io'
import { VscHistory } from 'react-icons/vsc'
import { HiOutlineFire, HiFire } from 'react-icons/hi'
import { CiStreamOn } from 'react-icons/ci'
import { RiHistoryFill } from 'react-icons/ri'
import { SiYoutubegaming } from 'react-icons/si'
import { AiOutlineShopping, AiOutlineYoutube, AiFillYoutube } from 'react-icons/ai'

import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// export default function Nav({ windowWidth }) {


// }

export function NavMax() {
  return (
    <nav>
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

  for(let i = 0; i < 5; i++) {
    lists.push(
      <li className='min-itm' key={navigation[i].id}>
        <Link to={navigation[i].url} className='menu-min'>
          {page === navigation[i].url ? navigation[i].active : navigation[i].inactive}
          <p className='text'>{navigation[i].title}</p>
        </Link>
      </li>
    )
  }

  return (
    <nav>
      <ul>
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
];
