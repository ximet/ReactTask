import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { THEMES } from './constants/themes';
import './assets/styles/constants/theme.css';

import Header from './Layouts/Header/Header';
import Main from './layouts/Main/Main';
import Footer from './layouts/Footer/Footer';

const getInitialTheme = () => localStorage.getItem('theme') || THEMES.light;

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  function switchTheme() {
    const currentTheme = theme === THEMES.light ? THEMES.dark : THEMES.light;

    setTheme(currentTheme);
  }

  return (
    <BrowserRouter>
      <div className={theme}>
        <Header theme={theme} onSwitchTheme={switchTheme} />
        <Main theme={theme} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
