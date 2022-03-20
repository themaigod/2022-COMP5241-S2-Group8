import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './page/login';
import Regist from './page/regist';
import Home from './page/home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/regist" element={<Regist/>} />
        <Route exact path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);