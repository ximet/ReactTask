import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './layouts/header/Header';
import { setThemeToLocalStorage, getThemeFromlocalStorage } from './services/themeService';

function App() {

  const[theme, setTheme] = useState('light');

  const themeToggle = () => {
    const newTheme = theme == 'light' ? 'dark': 'light';

    setThemeToLocalStorage(newTheme)
    setTheme(newTheme);
  }

  useEffect(() => {
    const prevTheme = getThemeFromlocalStorage();
    
    setTheme(prevTheme == '' ? 'light' : prevTheme);
  }, [])

  return (
    //Use BrowserRouter to use Link from react-router-dom
    <BrowserRouter>
      <Header theme={theme} themeToggle={themeToggle}/>
    </BrowserRouter>
  );
}

export default App;
