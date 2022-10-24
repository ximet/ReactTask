import React, { useState } from 'react';
import { Header } from './components/Header/Header.js';
import { Footer } from './components/Footer/Footer.js';
import { HomePage } from './components/Homepage/HomePage.js';
import { CityPage } from './components/CityPage/CityPage.js';
import { AboutPage } from './components/AboutPage/AboutPage.js';
import { ErrorPage } from './components/ErrorPage/ErrorPage.js';
import { FeedbackPage } from './components/FeedbackPage/FeedbackPage.js';
import * as styles from './styles/App.module.css';
import * as darkStyles from './styles/dark_mode/AppDark.module.css';
import { useAuthorize } from './customHooks/useAuthorize.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  useAuthorize();

  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };

  return (
    <>
      <BrowserRouter>
        <Header darkMode={darkMode} toggleMode={toggleMode} />
        <main className={darkMode ? darkStyles.main : styles.main}>
          <Routes>
            <Route path="/" element={<HomePage darkMode={darkMode} />} />
            <Route path="/city/:id" element={<CityPage darkMode={darkMode} />} />
            <Route path="/about" element={<AboutPage darkMode={darkMode} />} />
            <Route path="*" element={<ErrorPage darkMode={darkMode} />} />
            <Route path="/feedback" element={<FeedbackPage darkMode={darkMode} />} />
          </Routes>
        </main>
        <Footer darkMode={darkMode} />
      </BrowserRouter>
    </>
  );
}

export default App;
