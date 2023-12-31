import './App.scss';
import Header from './components/header/Header'
import Modal from './components/dialog/Modal'
import Main from './pages/Main';
import { NavMax, NavMin } from './components/navigation/Nav'
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ErrorPage from './components/ErrorPage';


function App() {

  let timer = null;
  const popUp = useSelector(state => state.popUp);
  const [nav, setNav] = useState('');
  const [row, setRow] = useState(3);
  const [vWidth, setVWidth] = useState(window.innerWidth);
  const [navType, setNavType] = useState(null);
  const [navWidth, setNavWidth] = useState(0);

  const onClickBG = () => {
    if(vWidth < 790) {
      setNavType('hidden');
    } else {
      setNavType('min');
    }
  }

  const onClickNavIcn = () => {
    if (navType === 'extend') {
      setNavType('min');
    } else if (navType === 'min') {
      if (vWidth < 1400) {
        return setNavType('modal');
      }
      setNavType('extend');
    } else if (navType === 'modal') {
      if (vWidth < 790) {
        setNavType('hidden')
        setNavWidth(0);
        return
      }
      setNavType('min');
    } else if (navType === 'hidden') {
      setNavType('modal');
    }
  }

  const onResizeVwidth = (w) => {
    if (w > 1902) return 5
    if (w > 1576) return 4
    if (w > 1096) return 3
    if (w >= 700) return 2
    if( w < 700) return 1
  }
  const onResized = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setVWidth(window.innerWidth);
    }, 300)
  };

  useEffect(() => {
    setRow(onResizeVwidth(vWidth))
  }, [vWidth, row])

  // navType = ['extend', 'min', 'modal', hidden']
  useEffect(() => {
    if (vWidth >= 1400) { // 데스크탑
      setNavType('extend');
    } else if (vWidth > 790) { // 테블릿
      setNavType('min');
    } else {
      setNavType('hidden')
    }
  }, [vWidth])

  useEffect(() => {
    window.addEventListener('resize', onResized)
    return () => {
      window.removeEventListener('resize', onResized)
    }
  }, [])

  useEffect(() => {
    if (navType === 'min') {
      setNavWidth(72);
    } else if (navType === 'extend') {
      setNavWidth(240);
    } else if (navType === 'hidden') {
      setNavWidth(0)
    }
  }, [navType])

  useEffect(() => {
    if (navType === 'hidden') return 
    if (vWidth < 767) {
      return setNav(null)
    }
    const lazyLoadNav = setTimeout(() => {
      setNav(<NavMin />)
    }, 300)
    return () => {
      clearTimeout(lazyLoadNav);
    }
  }, [navType, vWidth])

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
        <Route path='/' element={<Main navWidth={navWidth} vWidth={vWidth} row={row} />} />
        <Route path='*' element={<ErrorPage navWidth={navWidth} vWidth={vWidth}/>} />
      </Routes>


      { // Setting-shortcut Modal Popup
        popUp.shortcutOpend && <Modal />
      }
    </div>

  );
}

export default App;

