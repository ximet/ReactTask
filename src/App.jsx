import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import weatherApi from '../../api/weatherApi';
import { getCookie, setCookie } from '../../utils/cookies';
import { tokenSelector } from '../../store/selectors';
import { setTheme, setToken } from '../../store/actions';
import { getLocalstorageItem } from '../../utils/localStorage';
import changeCssRootVariables from '../../utils/changeCssRootVariables';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainPage from '../../components/MainPage/MainPage';
import InfoPage from '../../components/InfoPage/InfoPage';
import FeedbackPage from '../../components/FeedbackPage/FeedbackPage';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import SelectedCityPage from '../../components/SelectedCityPage/SelectedCityPage';
import SnackBar from '../../components/SnackBar/SnackBar';
import Portal from '../../components/Portal/Portal';
import Preloader from '../../components/Preloader/Preloader';

import './App.scss';

function App() {
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const theme = getLocalstorageItem('theme') || 'light';

    dispatch(setTheme(theme));
    changeCssRootVariables(theme);

    const accessToken = getCookie('token');

    if (accessToken) {
      dispatch(setToken(accessToken));
    } else {
      weatherApi.getToken(process.env.TOKEN_LIFE_TIME).then((data) => {
        dispatch(setToken(data));
        setCookie('token', data, process.env.TOKEN_LIFE_TIME);
      });
    }
  }, []);

  return (
    <div className="app">
      <Router>
        <Header />
        <div className="content">
          {
          token
            ? (
              <Switch>
                <Route exact path="/">
                  <MainPage />
                </Route>
                <Route exact path="/info">
                  <InfoPage />
                </Route>
                <Route exact path="/feedback">
                  <FeedbackPage />
                </Route>
                <Route path="/:id">
                  <SelectedCityPage />
                </Route>
                <Route>
                  <ErrorPage />
                </Route>
              </Switch>
            )
            : <Preloader />
          }
        </div>
        <Footer />
      </Router>
      <Portal><SnackBar /></Portal>
    </div>
  );
}

export default App;
