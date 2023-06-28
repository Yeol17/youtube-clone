import './App.scss';
import Header from './components/header/Header'
import { Provider } from 'react-redux';
import { store } from './store'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
      </div>
    </Provider>
  );
}

export default App;
