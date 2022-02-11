import React, { useEffect, useState } from 'react';
import { url } from './constants';
import { getToken } from './api';
import CurrentWeather from './components/CurrentWeather';
import SearchLocation from './components/SearchLocation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import classes from './App.module.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import InfoPage from './views/InfoPage/InfoPage';
import FeedbackPage from './views/FeedbackPage/FeedbackPage';
import ListPage from './views/ListPage/ListPage';
import MainPage from './views/MainPage/MainPage';

function App() {
  const [token, setToken] = useState('');
  const [coords, setCoords] = useState({});
  const [searchedLocation, setSearchedLocation] = useState({});

  const isSearchedLocationEmpty = Object.keys(searchedLocation).length === 0;

  const updateSearchedLocation = location => {
    setSearchedLocation(location);
  };

  useEffect(() => {
    getToken(url).then(token => setToken(token));
    navigator.geolocation.getCurrentPosition(
      pos => {
        setCoords(pos.coords);
      },
      err => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
    );
  }, []);

  return (
    <Router>
      <div className={classes.app}>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage>
              <SearchLocation token={token} updateSearchedLocation={updateSearchedLocation} />
              {isSearchedLocationEmpty ? (
                ''
              ) : (
                <CurrentWeather
                  title={'Current weather from searched location'}
                  token={token}
                  locationId={searchedLocation.id}
                />
              )}
              <CurrentWeather
                title={'Current weather from your location'}
                token={token}
                coords={coords}
              />
            </MainPage>
          </Route>
          <Route path="/weather">
            <ListPage />
          </Route>
          <Route path="/about">
            <InfoPage />
          </Route>
          <Route path="/feedback">
            <FeedbackPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
