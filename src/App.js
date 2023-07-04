import './App.scss';
import Header from './components/header/Header'
import Modal from './components/dialog/Modal'
import { useSelector } from 'react-redux';

function App() {

  let popUp = useSelector(state => state.popUp);

  return (
    <div className="App">
      <Header />
      {popUp.shortcutOpend && <Modal />}
    </div>

  );
}

export default App;
