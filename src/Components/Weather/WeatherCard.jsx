import React from 'react';
import PropTypes from 'prop-types';
import { WEATHER_API_KEY } from 'const/index.js';

import styles from './WeatherCard.sass';

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
    };
  }

  componentDidMount() {
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${this.props.location}&appid=${WEATHER_API_KEY}&units=metric`;
    let weatherData;

    fetch(API_URL).then(res => res.json()).then(json => {
      this.setState({
        data: {
          temperature: json.main.temp,
          city: json.name,
          country: json.sys.country,
          time: new Date(json.dt).toLocaleString(),
          humidity: json.main.humidity,
          description: json.weather[0].description,
          iconName: json.weather[0].icon,
          error: '',
        }
      });
    });
  }

  render() {
    const wData = this.state.data;
    const iconUrl = 'http://openweathermap.org/img/w/' + (wData ? wData.iconName : '') + '.png';

    return (
      <div className={styles.weatherCard}>
        { wData
          ? (
            <div className={styles.weatherCardContent}>
              <header className={styles.weatherCardHeader}>
                <h2 className={styles.weatherCardLocation}>
                  {`${wData.city}, ${wData.country}`}
                </h2>
                <div className={styles.weatherCardTemp}>
                  <span className={styles.weatherCardTempValue}>
                    {wData.temperature}
                  </span>
                  <span className={styles.weatherCardTempUnit}>
                    °
                  </span>
                </div>
                <img
                  className={styles.weatherCardTempIcon}
                  src={iconUrl}
                  alt={wData.description}/>
                <time className={styles.weatherCardTime}>
                  {wData.time}
                </time>
              </header>
              <div className={styles.weatherCardInfo}>
                <p>
                  {`Humidity: ${wData.humidity}`}
                </p>
                <p>
                  {`Description: ${wData.description}`}
                </p>
                { wData.error
                  ? (
                    <p>
                      {`Error: ${wData.error}`}
                    </p>
                  )
                  : ''
                }
              </div>
            </div>
          )
          : (
            <div className={styles.weatherCardContent}>
              Loading
            </div>
          )
        }
      </div>
    );
  }
};

WeatherCard.propTypes = {
  location: PropTypes.string,
};

WeatherCard.defaultProps = {
  location: 'Minsk, BY',
};

export default WeatherCard;
