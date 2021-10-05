import React from 'react';
import classes from './CityForecast.module.css';
import CurrentCityForecast from './CurrentCityForecast/CurrentCityForecast';
import ExtraCityForecast from './ExtraCityForecast/ExtraCityForecast';
import SelectedDateTime from './SelectedDateTime/SelectedDateTime';
import { currentCityData } from '../../mock/mock.js';

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
