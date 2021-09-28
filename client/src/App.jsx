import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './layouts/header/Header';
import { themes } from './globalConsts';

const useLocalStorageTheme = (initialTheme) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || initialTheme
  );

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme]
}

function App() {
  const [theme, setTheme] = useLocalStorageTheme(themes.light);

  function themeToggle() {
    const newTheme = theme == themes.light ? themes.dark : themes.light;

    setTheme(newTheme);
  }

  return (
    //Use BrowserRouter to use Link from react-router-dom
    <BrowserRouter>
      <Header theme={theme} themeToggle={themeToggle} />
    </BrowserRouter>
  );
}

export default App;
