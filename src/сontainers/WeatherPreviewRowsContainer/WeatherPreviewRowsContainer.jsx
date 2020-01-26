import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WeatherPreviewRow from '../../components/WeatherPreviewRow/WeatherPreviewRow.jsx';
import { toggleButtonAction, fetchWeatherByCityAction, setSelectedCityAction } from '../../store/actions/actionCreator';
import { CITIES_LIST } from '../../constants';

class WeatherPreviewRowsContainer extends Component {
  componentDidMount() {
    const { fetchWeatherByCity } = this.props;
    CITIES_LIST.forEach((city) => {
      fetchWeatherByCity(city.name);
    });
  }

  handleClick = (city) => {
    const { isMore, toggleButton, setSelectedCity } = this.props;
    toggleButton(!isMore);
    setSelectedCity(city);
  };

  render() {
    const { cityWeather } = this.props;
    const objectArray = Object.entries(cityWeather);
    const citiesListWithWeather = [];
    objectArray.forEach(([, value]) => {
      citiesListWithWeather.push(value);
    });
    return (
      <ul>
        {
          citiesListWithWeather.length ? (
            citiesListWithWeather.map((city) => (
              <li role="tab" key={city.id} onClick={() => this.handleClick(city)} onKeyPress={() => {}}>
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
  isMore: state.toggleButton.isMore,
  cityWeather: state.fetchWeatherByCity,
  selectedCity: state.setSelectedCity,
});

const mapDispatchToProps = (dispatch) => ({
  toggleButton: (isMore) => dispatch(toggleButtonAction(isMore)),
  fetchWeatherByCity: (cityName) => dispatch(fetchWeatherByCityAction(cityName)),
  setSelectedCity: (city) => dispatch(setSelectedCityAction(city)),
});

WeatherPreviewRowsContainer.propTypes = {
  fetchWeatherByCity: PropTypes.func.isRequired,
  isMore: PropTypes.bool.isRequired,
  toggleButton: PropTypes.func.isRequired,
  setSelectedCity: PropTypes.func.isRequired,
  cityWeather: PropTypes.shape({
    country: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPreviewRowsContainer);
