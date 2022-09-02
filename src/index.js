import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './Store/index';

import './assets/css/fonts.css';
import './assets/css/reset.css';
import './assets/css/general.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ThemeWrapper from './Components/ThemeWrapper/ThemeWrapper';

import List from './Pages/List';
import Contacts from './Pages/Contacts';
import Info from './Pages/Info';
import CityPage from './Pages/CityPage';
import Homepage from './Pages/Homepage';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeWrapper>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/list" element={<List />} />
            <Route path="/info" element={<Info />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/city:id" element={<CityPage />} />
            <Route path="*" element={<div>Page not found!</div>} />
          </Routes>
        </main>
        <Footer />
      </ThemeWrapper>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
