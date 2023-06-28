//  Arquivo principal. Serve para iniciar a aplicação

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import logo from "logo.svg; a "logo" é como o arquivo será chamado onde está sendo importado!


const root = ReactDOM.createRoot(document.getElementById('root'));
/*Renderiza a aplicação no navegador*/

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
