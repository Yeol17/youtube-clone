import './App.scss';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

// import Header from './components/header/Header'
import Modal from './components/dialog/Modal'
import Container from './pages/Container'
// import { NavMax, NavMin } from './components/navigation/Nav'

function App() {

  const iterableRoutes = pages.map(path => <Route path={path} element={<Container />} />);

  let popUp = useSelector(state => state.popUp);


  return (
    <div className="App">

      {popUp.shortcutOpend && <Modal />}

      <Routes>
        {iterableRoutes}
        <Route path='*' element={<div>404</div>} />
      </Routes>

    </div>

  );
}

export default App;

const pages = [
  '/',
  '/watch/:id',
  '/shorts/:id',
  '/feed/:type',  
  '/channel/:id',  
  '/gaming',  
  '/premium',  
];