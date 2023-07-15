import './App.scss';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header'
import Modal from './components/dialog/Modal'
import Main from './pages/Main';
import Watch from './pages/Watch';
import { useEffect, useState } from 'react';
import { NavMax, NavMin } from './components/navigation/Nav'

function App() {

  const pages = [
    '/',
    '/shorts',
    '/feed',
    '/channel/:id',
    '/gaming',
    '/premium',
  ];
  // const iterableRoutes = pages.map(path => <Route path={path} element={<Container />} />);

  let timer = null;
  let nav;

  let popUp = useSelector(state => state.popUp);

  let [vWidth, setVWidth] = useState(window.innerWidth);
  let [navType, setNavType] = useState('');

  const onClickNavIcn = () => {
    if (navType === 'extend') {
      setNavType('min');
    } else if (navType === 'min') {
      if (vWidth < 1313) {
        setNavType('modal');
      }
      setNavType('extend');
    }
  }

  const onResized = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setVWidth(window.innerWidth);
    }, 300)
  };

  useEffect(() => {
    window.addEventListener('resize', onResized)
    return () => {
      window.removeEventListener('resize', onResized)
    }
  }, [])

  useEffect(() => {
    console.log(vWidth);
    if (vWidth > 1312) {
      setNavType('extend');
    } else {
      setNavType('min');
    }
  }, [vWidth])

  if (navType === 'min') {
    nav = <NavMin />;
  } else if (['extend', 'max'].includes(navType)) {
    nav = <NavMax />;
  }



  return (
    <div className="App">

      {/* 상단 검색바 */}
      <Header onClickNavIcn={onClickNavIcn} />

      {/* 메뉴 */}
      {nav}

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>


      { // 설정-단축키 모달팝업
        popUp.shortcutOpend && <Modal />
      }
    </div>

  );
}

export default App;

