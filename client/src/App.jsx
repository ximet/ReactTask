import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './layouts/header/Header';
import { themes, bgImages } from './globalConsts';
import BackgroundImage from './components/backgroundImage/BackgroundImage';
import CityForecastView from './views/cityForecastView/CityForecastView';
import { routes } from './routes/routes';
import InfoView from './views/infoView/InfoView';
import FeedBackView from './views/feedbackView/FeedbackView';
import Preloader from './components/Preloader/Preloader';
import { showPreloaderTimeout } from './globalConsts';
import { useLocalStorageTheme } from './hooks/hooks';

function App(props) {
  const [theme, setTheme] = useLocalStorageTheme(themes.light);
  const bgImage = bgImages[theme];
  const [shouldShowPreloader, setShouldShowPreloader] = useState(true);

  function themeToggle() {
    const newTheme = theme == themes.light ? themes.dark : themes.light;

    setTheme(newTheme);
  }

  useEffect(() => {
    props.initializeApp();

    const timerId = setTimeout(() => {
      setShouldShowPreloader(false);
    }, showPreloaderTimeout);

    return () => {
      clearTimeout(timerId);
    };
  }, [props.initializeApp]);

  return (
    <>
      {shouldShowPreloader || !props.isDataReceived ? (
        <Preloader theme={theme} />
      ) : (
        <BrowserRouter>
          <BackgroundImage src={bgImage} />
          <Header theme={theme} themeToggle={themeToggle} />
          <Switch>
            <Route path={routes.info.path}>
              <InfoView />
            </Route>
            <Route path={routes.feedback.path}>
              <FeedBackView theme={theme} />
            </Route>
            <Route path={routes.home.path}>
              <CityForecastView theme={theme} />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
