import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './layouts/header/Header';
import { themes, bgImages } from './globalConsts';
import BackgroundImage from './components/backgroundImage/BackgroundImage';
import CityForecastView from './views/cityForecastView/CityForecastView';
import { routes } from './routes/routes';
import InfoView from './views/infoView/InfoView';
import FeedBackView from './views/feedbackView/FeedbackView';

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
      <BackgroundImage src={bgImage} />
      <Header theme={theme} themeToggle={themeToggle} />
      <Switch>
        <Route path={routes.info.path}>
          <InfoView theme={theme}/>
        </Route>
        <Route path={routes.feedback.path}>
          <FeedBackView theme={theme} />
        </Route>
        <Route path={routes.home.path}>
          <CityForecastView theme={theme} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
