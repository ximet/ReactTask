import React from 'react';
import classes from './cityForecast.module.css';
import ExtraCityForecast from './extraCityForecast/ExtraCityForecast';

const currentWeather = {
  wind: 7,
  humidity: 50,
  feels: 5,
  pressure: 1000
}

class CityForecast extends React.Component {
  render() {
    return (
      <div className={classes.container}>
        <ExtraCityForecast weather={currentWeather}/>
      </div>
    )
  }
}

export default CityForecast;
