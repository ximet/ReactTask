import React, { useContext, useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Feedback from './views/Feedback/Feedback';
import Home from './views/Home/Home';
import Info from './views/Info/Info';
import ScrollToTop from './helpers/scrollToTop';
import { weatherApi } from './services/WeatherApi';
import { tokenSelector } from './redux/selectors/tokenSelector';
import { setToken } from './redux/actions/tokenActions';
import BackgroundImage from './atomic-components/BackgroundImage/BackgroundImage';
import { ThemeContext } from './providers/themeContext';

function App() {
  const { token } = useSelector(tokenSelector);
  const dispatch = useDispatch();
  const { bgTheme } = useContext(ThemeContext);

  useEffect(() => {
    weatherApi.getToken().then(accessToken => dispatch(setToken(accessToken)));
  }, []);

  return (
    <Router>
      <BackgroundImage theme={bgTheme} />
      <ScrollToTop />
      <NavBar token={token} />
      <Switch>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
        <Route exact path="/">
          <Home token={token} />
        </Route>
        <Route exact path="/location/:id">
          <Home token={token} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
