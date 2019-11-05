import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherWidget from '../WeatherWidget';

import { getWeatherByGeolocation } from '../../services/weatherService';
import Alert from '../common/Alert';

export default class CurrentGeolocationWeatherPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: undefined,
      errorMessage: '',
    };
  }

  componentDidMount() {
    new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject))
      .then(getWeatherByGeolocation)
      .then((weather) => this.setState({ weather }))
      .catch((e) => this.setState({ errorMessage: e.message }));
  }

  render() {
    const { weather, errorMessage } = this.state;

    const { nav } = this.props;
    return (
      <div>
        {errorMessage && <Alert>{errorMessage}</Alert>}
        {weather && (
          <div style={{ display: 'grid', justifyContent: 'center' }}>
            <WeatherWidget weather={weather} />
            <div style={{ display: 'grid', justifySelf: 'end' }}>{nav}</div>
          </div>
        )}
      </div>
    );
  }
}

CurrentGeolocationWeatherPage.propTypes = {
  nav: PropTypes.object.isRequired,
};
