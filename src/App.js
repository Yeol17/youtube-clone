import './App.scss';
import Header from './components/header/Header'
import Modal from './components/dialog/Modal'
import Main from './pages/Main';
import { NavMax, NavMin } from './components/navigation/Nav'
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Unimplemented from './components/Unimplemented';




function App() {

  // const pages = [
  //   '/shorts',
  //   '/feed/:any',
  //   '/channel/:any',
  //   '/gaming',
  //   '/premium',
  //   '/music',
  //   '/kids',
  //   '/accounts',
  //   '/reporthistory'
  // ];
  // const iterableRoutes = pages.map(path => <Route path={path} element={<Container />} />);

  let timer = null;
  let [nav, setNav] = useState('');

  let popUp = useSelector(state => state.popUp);

  let [row, setRow] = useState(3);
  let [vWidth, setVWidth] = useState(window.innerWidth);
  let [navType, setNavType] = useState(null);
  let [navWidth, setNavWidth] = useState(0);

  const onClickBG = () => {
    setNavType('min');
  }

  const onClickNavIcn = () => {
    if (navType === 'extend') {
      setNavType('min');
    } else if (navType === 'min') {
      if (vWidth <= 1024) {
        return setNavType('modal');
      }
      setNavType('extend');
    } else if (navType === 'modal') {
      if (vWidth < 768) {
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
    if (w > 1680) return 5
    if (w > 1280) return 4
    if (w > 1024) return 3
    if (w > 768) return 2
    if (w > 319) return 1
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

  useEffect(() => {
    if (vWidth >= 1280) {
      setNavType('min');
    } else if (vWidth >= 1024) {
      setNavType('min');
    } else if (vWidth >= 768) {
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

  // useEffect(() => {
  //   axios.get('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDuoLXZTC533FJEOuj7LzacYC_OadzainQ&chart=mostPopular&part=snippet,contentDetails,statistics,status&regionCode=KR&maxResults=3')
  //   .then(res => {
  //     console.log(res.data);
  //   }).catch(err => console.log(err));
  // },[])
  console.log(1);
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
        <Route path='*' element={<Unimplemented />} />
      </Routes>


      { // Setting-shortcut Modal Popup
        popUp.shortcutOpend && <Modal />
      }
    </div>

  );
}

export default App;

