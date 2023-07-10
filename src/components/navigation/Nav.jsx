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
import { CiStreamOn } from 'react-icons/ci'
import { RiHistoryFill } from 'react-icons/ri'
import { SiYoutubegaming } from 'react-icons/si'
import { AiOutlineShopping, AiOutlineYoutube, AiFillYoutube } from 'react-icons/ai'

import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// export default function Nav({ windowWidth }) {


// }

// export function NavMax() {
//   return (
//     <nav>
//     </nav>
//   )
// }

export function NavMin() {

  let location = useLocation();
  let [page, setPage] = useState(location.pathname);

  useEffect(() => {
    setPage(location.pathname);
  }, [location])


  return (
    <nav>
      <ul>
        <li className='min-itm'>
          <Link to='/' className='menu-min'>
            {page === '/' ? <MdHome /> : <MdOutlineHome />}
            <p className='text'>홈</p>
          </Link>
        </li>
        <li className='min-itm'>
          <Link to='/shorts' className='menu-min'>
            {page === '/shorts' ? <AiFillYoutube /> : <AiOutlineYoutube />}
            <p className='text'>shorts</p>
          </Link>
        </li>
        <li className='min-itm'>
          <Link to='/feed/subscriptions' className='menu-min'>
            {page === '/feed/subscriptions' ? < MdSubscriptions /> : <MdOutlineSubscriptions />}
            <p className='text'>구독</p>
          </Link>
        </li>
        <li className='min-itm'>
          <Link to='/feed/library' className='menu-min'>
            {page === '/feed/library' ? <MdVideoLibrary /> : <MdOutlineVideoLibrary />}
            <p className='text'>보관함</p>
          </Link>
        </li>
        <li className='min-itm'>
          <Link to='/feed/history' className='menu-min'>
            <VscHistory className={page === '/feed/history' && 'bold'} />
            <p className='text'>시청 기록</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}