import React from 'react';
import classes from './cityForecast.module.css';
import CurrentCityForecast from './currentCityForecast/CurrentCityForecast';
import ExtraCityForecast from './extraCityForecast/ExtraCityForecast';
import SelectedDateTime from './selectedDateTime/SelectedDateTime';


const currentCityData = {
  city: 'Minsk',
  wind: 7,
  humidity: 50,
  feels: 5,
  pressure: 1000,
  temperature: 7,
  conditions: 'clear',
  time: '20:00',
  weekDay: 'Monday',
  day: 29,
  month: 'September',
  year: 2021
};

class CityForecast extends React.Component {
  render() {
    return (
      <div className={classes.container}>
        <ExtraCityForecast weather={currentCityData} />
        <CurrentCityForecast currentCityData={currentCityData}/>
        <SelectedDateTime currentCityData={currentCityData}/>
      </div>
    );
  }
}

export default CityForecast;
