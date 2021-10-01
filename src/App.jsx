import FooterWrapper from './layouts/FooterWrapper/FooterWrapper';
import HeaderWrapper from './layouts/HeaderWrapper/HeaderWrapper';
import MiddleWrapper from './layouts/MiddleWrapper/MiddleWrapper';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { THEME_DARK, THEME_LIGHT } from './constants/constants';
import { weatherAPI } from './services/dataService';

function App() {
  // weatherAPI
  //   .getToken('coherentsolutions', 'X4AbD4NrEd30')
  //   .then(response => console.log('Token:', response.data.access_token));

  const [themeMode, setThemeMode] = useState(THEME_LIGHT);

  function toggleThemeMode() {
    setThemeMode(themeMode === THEME_LIGHT ? THEME_DARK : THEME_LIGHT);
  }

  return (
    <BrowserRouter>
      <div className="global-wrapper" data-theme={themeMode}>
        <HeaderWrapper themeMode={themeMode} toggleThemeMode={toggleThemeMode} />
        <MiddleWrapper />
        <FooterWrapper />
      </div>
    </BrowserRouter>
  );
}

export default App;
