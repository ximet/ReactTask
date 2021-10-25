import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { connect } from 'react-redux';
import CurrentCityForecastView from './views/CurrentCityForecastView/CurrentCityForecastView';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Geolocation from './services/GeolocationService';
import { changeLocation, setGeolocationCity } from './actions/locationsManagerActions';
import Storage from './services/StorageConnectionService';
import { CURRENT_LOCATION_STORAGE_CODE, THEME_STORAGE_CODE } from './utils/constants';
import ThemeContext from './providers/themeContext';
import { getDefaultTheme } from './config/themeConfig';
import constants from './assets/styles/constants.scss';
import classes from './assets/styles/common.scss';
import StorageService from './services/StorageConnectionService';

function App(props) {
  const [theme, setTheme] = useState(() => getDefaultTheme());

  const selectTheme = newTheme => {
    if (theme.code !== newTheme.code) {
      setTheme(newTheme);
      StorageService.setValue(THEME_STORAGE_CODE, newTheme);
    }
  };

  useEffect(() => {
    props.setGeolocationCity();
  }, [props.setGeolocationCity]);

  return (
    <ThemeContext.Provider value={{ theme, selectTheme }}>
      <div id="themeContainer" className={constants[theme.code]}>
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
    setGeolocationCity: () => dispatch(setGeolocationCity())
  };
};

const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default WrappedApp;
