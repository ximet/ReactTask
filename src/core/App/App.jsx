import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import weatherApi from '../../api/weatherApi';
import { getCookie, setCookie } from '../../utils/cookies';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainPage from '../../components/MainPage/MainPage';
import InfoPage from '../../components/InfoPage/InfoPage';
import FeedbackPage from '../../components/FeedbackPage/FeedbackPage';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import SelectedCityPage from '../../components/SelectedCityPage/SelectedCityPage';
import SnackBar from '../../components/SnackBar/SnackBar';
import Portal from '../../components/Portal/Portal';

import './App.scss';
import Preloader from '../../components/Preloader/Preloader';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const accessToken = getCookie('token');

    if (accessToken) {
      setToken(accessToken);
    } else {
      weatherApi.getToken(process.env.TOKEN_LIFE_TIME).then((data) => {
        setToken(data);
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
