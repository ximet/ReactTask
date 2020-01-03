import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentCityWeather, getWeatherIcon } from 'actions';

import styles from './WeatherCard.sass';

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: props.isGettingData,
    };
  }

  componentDidMount() {
    const { location } = this.props;
    this.props.getCurrentCityWeather(location);
  }

  render() {
    const { loading } = this.state;
    const { currentCityWeather: data } = this.props;
    this.props.getWeatherIcon(data.iconName);

    return (
      <div className={styles.weatherCard}>
        {!!data.city && !loading
          ? (
            <div className={styles.weatherCardContent}>
              <header className={styles.weatherCardHeader}>
                <h2 className={styles.weatherCardLocation}>
                  {`${data.city}, ${data.country}`}
                </h2>
                <div className={styles.weatherCardTemp}>
                  <span className={styles.weatherCardTempValue}>
                    {data.temperature}
                  </span>
                  <span className={styles.weatherCardTempUnit}>
                    °
                  </span>
                </div>
                <img
                  className={styles.weatherCardTempIcon}
                  src={this.props.iconUrl}
                  alt={data.description} />
                <time className={styles.weatherCardTime}>
                  {data.time}
                </time>
              </header>
              <div>
                <p>
                  {`Humidity: ${data.humidity}`}
                </p>
                <p>
                  {`Description: ${data.description}`}
                </p>
              </div>
            </div>
          )
          : (
            <div className={styles.weatherCardContent}>
              Loading
            </div>
          )}
      </div>
    );
  }
}

WeatherCard.propTypes = {
  location: PropTypes.string,
  isGettingData: PropTypes.bool.isRequired,
  currentCityWeather: PropTypes.shape({
    temperature: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    humidity: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
  }).isRequired,
  iconUrl: PropTypes.string.isRequired,
  getCurrentCityWeather: PropTypes.func.isRequired,
  getWeatherIcon: PropTypes.func.isRequired,
};

WeatherCard.defaultProps = {
  location: 'Minsk, BY',
};

const mapStateToProps = ({
  weatherReducer: {
    isGettingData,
    currentCityWeather,
    iconUrl,
  },
}) => ({
  isGettingData,
  currentCityWeather,
  iconUrl,
});

const mapDispatchToProps = {
  getCurrentCityWeather,
  getWeatherIcon,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);
