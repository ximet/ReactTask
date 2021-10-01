import React from 'react';
import classes from './cityForecast.module.css';
import CurrentCityForecast from './currentCityForecast/CurrentCityForecast';
import ExtraCityForecast from './extraCityForecast/ExtraCityForecast';
import SelectedDateTime from './selectedDateTime/SelectedDateTime';
import {currentCityData} from '../../mock/mock.js'

class CityForecast extends React.Component {
  render() {
    return (
      <div className={classes.container}>
        <ExtraCityForecast weather={currentCityData} />
        <CurrentCityForecast currentCityData={currentCityData} />
        <SelectedDateTime currentCityData={currentCityData} />
      </div>
    );
  }
}

export default CityForecast;
