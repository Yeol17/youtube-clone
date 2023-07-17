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
  let [nav, setNav] = useState('');

  let popUp = useSelector(state => state.popUp);

  let [vWidth, setVWidth] = useState(window.innerWidth);
  let [navType, setNavType] = useState('');

  const onClickBG = () => {
    console.log('123');
    setNavType('min');
  }

  const onClickNavIcn = () => {
    if (navType === 'extend') {
      setNavType('min');
    } else if (navType === 'min') {
      if (vWidth < 1313) {
        setNavType('modal');
        return
      }
      setNavType('extend');
    } else if (navType === 'modal') {
      setNavType('min');
    }
    console.log(navType);
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
  },)

  useEffect(() => {
    console.log(vWidth);
    if (vWidth > 1312) {
      setNavType('extend');
    } else {
      setNavType('min');
    }
  }, [vWidth])

  useEffect(() => {
    setTimeout(() => {
      setNav(<NavMin />)
    }, 300)
  })

  return (
    <div className="App">

      {/* Search Bar */}
      <Header onClickNavIcn={onClickNavIcn} />

      {/* Navigation */}
      <NavMax
        navType={navType}
        vWidth={vWidth}
        onClickNavIcn={onClickNavIcn}
        onClickBG={onClickBG}
      />

      {nav}

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>


      { // Setting-shortcut Modal Popup
        popUp.shortcutOpend && <Modal />
      }
    </div>

  );
}

export default App;

