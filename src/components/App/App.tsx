import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cities from '../Cities/Cities';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Error404 from '../Error404/Error404';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

const App = (): JSX.Element => {
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      (async () => {
        const options = {
          method: 'POST',
          body: '',
          requestMode: 'no-cors',
          headers: { 'Content-Type': 'application/json' }
        };
        const response = await fetch('http://localhost:3000/auth', options);
        const json = await response.json();
        localStorage.setItem('token', json.access_token);
      })();
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cities" element={<Cities />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
