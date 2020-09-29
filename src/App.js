import React, {Component} from 'react';
import Routes from './route';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './style.css'

const App = () => (
  <>
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>

  </>
);

export default App;