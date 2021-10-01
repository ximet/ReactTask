import FooterWrapper from './layouts/FooterWrapper/FooterWrapper';
import HeaderWrapper from './layouts/HeaderWrapper/HeaderWrapper';
import MiddleWrapper from './layouts/MiddleWrapper/MiddleWrapper';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import {
  API_AUTH_PASS,
  API_AUTH_USERNAME,
  API_KIEV_ID,
  THEME_DARK,
  THEME_LIGHT
} from './constants/constants';
import { weatherAPI } from './services/dataService';

function App() {
  weatherAPI.getToken(API_AUTH_USERNAME, API_AUTH_PASS).then(() => {
    weatherAPI.searchLocation('Kiev').then(locations => console.log(locations));
    weatherAPI.getCurrentWeather(API_KIEV_ID).then(weather => console.log(weather));
  });

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
