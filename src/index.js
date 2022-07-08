import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './Store/index';

import './assets/css/fonts.css';
import './assets/css/reset.css';
import styles from './assets/css/general.css';

import Header from './Components/Header/Header';
import List from './Pages/List';
import Contacts from './Pages/Contacts';
import Info from './Pages/Info';
import CityPage from './Pages/CityPage';
import Homepage from './Pages/Homepage';

const changeTheme = () => {
  document.querySelector('body').classList.toggle(styles.dark);
};
// const changeTheme = () => {
//   let theme = Boolean(localStorage.getItem('darkTheme'));
//   console.log(theme);
//   theme = !theme;
//   localStorage.setItem('darkTheme', theme);
// };

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header changeTheme={changeTheme} />
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
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
