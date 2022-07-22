import axios from 'axios';
import React, { useContext, useEffect } from 'react';
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
import { Theme, ThemeContext, ThemeContextConfig } from './../../store/theme-context';
import styles from './App.module.scss';

const App: React.FunctionComponent = () => {
  const { theme }: ThemeContextConfig = useContext(ThemeContext);
  useEffect(() => {
    if (!document.cookie) {
      axios.get(ENDPOINTS.auth, {
        withCredentials: true
      });
    }
  }, [document.cookie]);

  return (
    <BrowserRouter>
      <div className={`${styles.app} ${theme === Theme.DARK && styles[theme]}`}>
        <Header />
        <Routes>
          <Route index={true} element={<Home />} />
          <Route path="cities" element={<Cities />}>
            <Route path=":city" element={<Home />} />
          </Route>
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
      </div>
    </BrowserRouter>
  );
};

export default App;
