import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/css/fonts.css';
import './assets/css/reset.css';
import './assets/css/general.css';

import Header from './Components/Header/Header';
import List from './Pages/List';
import Contacts from './Pages/Contacts';
import Homepage from './Pages/Homepage';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="list" element={<List />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<div>Page not found!</div>} />
    </Routes>
  </BrowserRouter>,

  document.getElementById('app')
);
