import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
// import Admin from './Components/Admin/Admin';
// import Login from './Components/Admin/Auth/Login';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter , Route , Routes} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
