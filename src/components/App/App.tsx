import axios from 'axios';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ENDPOINTS } from '../../helpers/api';
import About from '../About/About';
import Cities from '../Cities/Cities';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Card from '../UI/Card/Card';
import ErrorComponent from '../UI/ErrorComponent/ErrorComponent';

const App: React.FunctionComponent = () => {
  useEffect(() => {
    if (!document.cookie) {
      axios.get(ENDPOINTS.auth, {
        withCredentials: true
      });
      location.reload(); //
    }
  }, [document.cookie]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cities" element={<Cities />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route
          path="*"
          element={
            <Card>
              <ErrorComponent message="Page not found" button="HOME" />
            </Card>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
