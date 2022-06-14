import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cities from './routes/Cities';
import About from './routes/About';
import Contacts from './routes/Contacts';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="cities" element={<Cities />} />
      <Route path="about" element={<About />} />
      <Route path="contacts" element={<Contacts />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('app')
);
