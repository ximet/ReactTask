import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { connect } from 'react-redux';
import CurrentCityForecastView from './views/CurrentCityForecastView/CurrentCityForecastView';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Geolocation from './services/GeolocationService';
import ApiService from './services/ForecastApiService';
import { changeLocation, setGeolocationCity } from './actions/locationsManagerActions';
import Storage from './services/StorageConnectionService';
import { CURRENT_LOCATION_STORAGE_CODE } from './utils/constants';
import ThemeContext from './providers/themeContext';
import { getDefaultTheme } from './config/themeConfig';
import classes from './assets/styles/constants.scss';

function App(props) {
  const [theme, setTheme] = useState(() => getDefaultTheme());

  const selectTheme = newTheme => {
    if (theme.code !== newTheme.code) {
      setTheme(newTheme);
    }
  };

  useEffect(() => {
    props.setGeolocationCity();
  }, [props.setGeolocationCity]);

  return (
    <ThemeContext.Provider value={{ theme, selectTheme }}>
      <div id="themeContainer" className={classes[theme.code]}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/">
              <CurrentCityForecastView />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

const mapStateToProps = ({ locationManager: { currentLocation } }) => {
  return {
    currentLocation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setGeolocationCity: () => dispatch(setGeolocationCity)
  };
};

const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default WrappedApp;
