import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { WeatherService } from './services/weather';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import DetailedCityView from './components/Views/DetailedCityView/DetailedCityView';
import ListOfCities from './components/Views/ListOfCities/ListOfCities';
import navLinks from './config/nav';
import { setCurrentCityWeather } from './redux/actions/weatherActions';
import styles from './App.scss';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setCurrentPositionWeather();
  }

  setCurrentPositionWeather() {
    const { _setWeatherCurrentCity } = this.props;
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      WeatherService().getWeather(coords.latitude, coords.longitude)
        .then(({ data }) => {
          _setWeatherCurrentCity(
            {
              name: data.name,
              temp: data.main.temp,
              weatherIcon: data.weather[0].icon,
            },
          );
        });
    });
  }

  render() {
    const { currentCity } = this.props;
    return (
      <Router>
        <div className={styles.wrapper}>
          <div className={styles.sideBar}>
            <Nav links={navLinks} />
          </div>
          <div className={styles.content}>
            <Header />
            <Switch>
              <Route exact path="/">
                <DetailedCityView city={currentCity} />
              </Route>
              <Route path="/cities">
                <ListOfCities />
              </Route>
              <Route path="/city/:id">
                <DetailedCityView city={{}} />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ currentCity }) => ({
  currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  _setWeatherCurrentCity: (value) => dispatch(setCurrentCityWeather(value)),
});

App.propTypes = {
  _setWeatherCurrentCity: PropTypes.func,
  currentCity: PropTypes.shape({
    name: PropTypes.number,
    temp: PropTypes.string,
    weatherIcon: PropTypes.string,
  }).obj.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
