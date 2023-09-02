import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
console.log(process.env);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
            <App />
        </BrowserRouter>
    </Provider>

);

reportWebVitals();
