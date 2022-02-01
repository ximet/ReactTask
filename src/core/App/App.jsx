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
import SnackBar from '../../components/SnackBar/SnackBar';

import './App.scss';

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
          <Switch>
            <Route exact path="/">
              <MainPage token={token} />
            </Route>
            <Route path="/info">
              <InfoPage />
            </Route>
            <Route exact path="/feedback">
              <FeedbackPage />
            </Route>
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
      <SnackBar />
    </div>
  );
}

export default App;
