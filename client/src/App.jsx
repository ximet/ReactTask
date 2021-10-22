import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './layouts/header/Header';
import { themes, bgImages } from './globalConsts';
import BackgroundImage from './components/backgroundImage/BackgroundImage';
import CityForecastView from './views/cityForecastView/CityForecastView';

const useLocalStorageTheme = initialTheme => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || initialTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
};

function App(props) {
  const [theme, setTheme] = useLocalStorageTheme(themes.light);
  const bgImage = bgImages[theme];

  function themeToggle() {
    const newTheme = theme == themes.light ? themes.dark : themes.light;

    setTheme(newTheme);
  }

  useEffect(() => {
    props.initializeApp();
  }, [props.initializeApp]);

  return (
    <BrowserRouter>
      <BackgroundImage bgImage={bgImage} />
      <Header theme={theme} themeToggle={themeToggle} />
      <CityForecastView theme={theme} />
    </BrowserRouter>
  );
}

export default App;
