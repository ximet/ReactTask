import { useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './layouts/header/Header';
import { themes } from './globalConstVariables';

function App() {
  const [theme, setTheme] = useState(setPrimaryTheme());

  function themeToggle() {
    const newTheme = theme == themes.light ? themes.dark : themes.light;

    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  function setPrimaryTheme() {
    const prevTheme = localStorage.getItem('theme') || '';

    return prevTheme == '' ? themes.light : prevTheme
  }


  return (
    //Use BrowserRouter to use Link from react-router-dom
    <BrowserRouter>
      <Header theme={theme} themeToggle={themeToggle} />
    </BrowserRouter>
  );
}

export default App;
