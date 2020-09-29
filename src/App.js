import React, {Component} from 'react';
import './style.css'
import Routes from './route';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

const App = () => (
  <>
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>
 
  </>
);

export default App;