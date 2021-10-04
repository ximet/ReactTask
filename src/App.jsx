import FooterWrapper from './layouts/FooterWrapper/FooterWrapper';
import HeaderWrapper from './layouts/HeaderWrapper/HeaderWrapper';
import ContentWrapper from './layouts/ContentWrapper/ContentWrapper';

import 'normalize.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { THEME_DARK, THEME_LIGHT } from './constants/constants';

function App() {
  const [theme, setTheme] = useState(THEME_LIGHT);

  function switchTheme() {
    setTheme(theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT);
  }

  return (
    <BrowserRouter>
      <div className={`global-wrapper theme-mode_${theme}`}>
        <HeaderWrapper theme={theme} onToggleTheme={switchTheme} />
        <ContentWrapper />
        <FooterWrapper />
      </div>
    </BrowserRouter>
  );
}

export default App;
