import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './layouts/header/Header';
import { themes, bgImages } from './globalConsts';
import CityForecast from './layouts/CityForecast/CityForecast';
import BackgroundImage from './components/backgroundImage/BackgroundImage';
import DailyForecasts from './layouts/dailyForecasts/DailyForecasts';
import HourlyForecasts from './layouts/hourlyForecasts/HourlyForecasts';
import { getAccessToken } from './api/weatherApi';

const useLocalStorageTheme = initialTheme => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || initialTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
};

const getToken = async () => {
  const token = await getAccessToken();
  console.log(token);
};

getToken();

function App() {
  const [theme, setTheme] = useLocalStorageTheme(themes.light);
  const bgImage = bgImages[theme];

  function themeToggle() {
    const newTheme = theme == themes.light ? themes.dark : themes.light;

    setTheme(newTheme);
  }

  return (
    //Use BrowserRouter to use Link from react-router-dom
    <BrowserRouter>
      <BackgroundImage bgImage={bgImage} />
      <Header theme={theme} themeToggle={themeToggle} />
      <CityForecast />
      <DailyForecasts theme={theme} />
      <HourlyForecasts theme={theme} />
    </BrowserRouter>
  );
}

export default App;
