import './App.scss';
import Header from './components/header/Header'
import Modal from './components/dialog/Modal'
import Main from './pages/Main';
import { NavMax, NavMin } from './components/navigation/Nav'
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';




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

  let [row, setRow] = useState(3);
  let [vWidth, setVWidth] = useState(window.innerWidth);
  let [navType, setNavType] = useState('');
  let [navWidth, setNavWidth] = useState(0);

  const onClickBG = () => {
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
  }

  const onResized = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setVWidth(window.innerWidth);
    }, 300)
  };

  useEffect(() => {
    if (vWidth > 1312) {
      setNavType('extend');
    } else {
      setNavType('min');
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
    }
  }, [navType])

  useEffect(() => {
    const lazyLoadNav = setTimeout(() => {
      setNav(<NavMin />)
    }, 300)
    return () => {
      clearTimeout(lazyLoadNav);
    }
  }, [])

  // useEffect(() => {
  //   axios.get('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDuoLXZTC533FJEOuj7LzacYC_OadzainQ&chart=mostPopular&part=snippet,contentDetails,statistics,status&regionCode=KR&maxResults=3')
  //   .then(res => {
  //     console.log(res.data);
  //   }).catch(err => console.log(err));
  // },[])

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
        <Route path='*' element={<div>404</div>} />
      </Routes>


      { // Setting-shortcut Modal Popup
        popUp.shortcutOpend && <Modal />
      }
    </div>

  );
}

export default App;

