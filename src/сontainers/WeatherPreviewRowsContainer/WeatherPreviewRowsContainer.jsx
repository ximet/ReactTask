import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WeatherPreviewRow from '../../components/WeatherPreviewRow/WeatherPreviewRow.jsx';
import { fetchWeatherByCityAction } from '../../store/actions/actionCreator';

class WeatherPreviewRowsContainer extends Component {
  componentDidMount() {
    const { fetchWeatherByCity } = this.props;
    fetchWeatherByCity('Minsk');
    fetchWeatherByCity('London');
    fetchWeatherByCity('Moscow');
    fetchWeatherByCity('Tel-Aviv');
  }

  render() {
    // const { cityWeather } = this.props;
    // const objectArray = Object.entries(cityWeather);
    const citiesListWithWeather = [];
    // objectArray.forEach(([key, value]) => {
    //   citiesListWithWeather.push(value);
    // });
    return (
      <ul>
        {
          citiesListWithWeather.length ? (
            citiesListWithWeather.map((city) => (
              <li key={city.id}>
                <WeatherPreviewRow
                  cityName={city.name}
                  temperature={city.temperature} />
              </li>
            ))) : (<li><p>Nothing to show ☹</p></li>)
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  cityWeather: state.fetchWeatherByCity,
});

const mapDispatchToProps = (dispatch) => ({
  fetchWeatherByCity: (city) => dispatch(fetchWeatherByCityAction(city)),
});

WeatherPreviewRowsContainer.propTypes = {
  fetchWeatherByCity: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPreviewRowsContainer);
