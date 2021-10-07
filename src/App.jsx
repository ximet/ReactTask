import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { THEMES } from './constants/themes';
import './assets/styles/constants/theme.css'

import Header from './Layouts/Header/Header';
import Main from './layouts/Main/Main';
import Footer from './layouts/Footer/Footer';

function App() {
  const [theme, setTheme] = useState(THEMES.light);

  function switchTheme() {
    const currentTheme = theme === THEMES.light ? THEMES.dark : THEMES.light;

    setTheme(currentTheme);
  }

  return (
    <BrowserRouter>
      <div className={theme}>
        <Header theme={theme} onSwitchTheme={switchTheme} />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
