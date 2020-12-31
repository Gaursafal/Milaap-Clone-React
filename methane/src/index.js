import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
import { DataContextProvider } from './Context/DataContextProvider';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <DataContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </DataContextProvider>,
=======
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
>>>>>>> ec6a8730252107f61e19d8ef4cb07157ff9db187
  document.getElementById('root')
);