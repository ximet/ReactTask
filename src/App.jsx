const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';

import FooterWrapper from './layouts/FooterWrapper/FooterWrapper';
import HeaderWrapper from './layouts/HeaderWrapper/HeaderWrapper';
import MiddleWrapper from './layouts/MiddleWrapper/MiddleWrapper';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {
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
