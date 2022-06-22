import axios from 'axios';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { URL } from '../../helpers/api';
import About from '../About/About';
import Cities from '../Cities/Cities';
import Contacts from '../Contacts/Contacts';
import Error404 from '../Error404/Error404';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';

axios.defaults.withCredentials = true;

const App = () => {
  useEffect(() => {
    if (!document.cookie) {
      axios.get(URL.auth);
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
