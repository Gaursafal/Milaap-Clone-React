import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataContextProvider } from './Context/DataContextProvider';
import {HashRouter} from "react-router-dom";

ReactDOM.render(
  <DataContextProvider>
    <HashRouter>
    <App />
    </HashRouter>
  </DataContextProvider>,
  document.getElementById('root')
);