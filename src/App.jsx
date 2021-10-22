import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { connect } from 'react-redux';
import CurrentCityForecastView from './views/CurrentCityForecastView/CurrentCityForecastView';
import ContactsView from './views/ContactsView/ContactsView';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Geolocation from './services/GeolocationService';
import { changeLocation, setGeolocationCity } from './actions/locationsManagerActions';
import Storage from './services/StorageConnectionService';
import { CURRENT_LOCATION_STORAGE_CODE } from './utils/constants';

function App(props) {
  useEffect(() => {
    props.setGeolocationCity();
  }, [props.setGeolocationCity]);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/contacts">
          <ContactsView />
        </Route>
        <Route path="/">
          <CurrentCityForecastView />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
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
