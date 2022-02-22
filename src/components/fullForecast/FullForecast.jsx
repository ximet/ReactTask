import classes from './fullForecast.scss';
import { useState, useEffect } from 'react';

import DataService from '../../dataService/DataService';
import { filterDayForecastData, filterHourForecastData } from '../../dataService/formatter';

import CurrentForecastCard from '../currentForecastCard/CurrentForecastCard';
import DailyForecast from '../dailyForecast/DailyForecast';
import ForecastCard from '../forecastCard/ForecastCard';
import CurrentForecastButton from '../currentForecastButton/CurrentForecastButton';

function FullForecast(props) {
  const { location } = props;

  const [currentData, setCurrentData] = useState({});
  const [dailyData, setDailyData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [isCurrent, setIsCurrent] = useState(true);
  const [actualDayData, setActualDayData] = useState(null);
  const [actualHourlyData, setActualHourlyData] = useState([]);

  useEffect(async () => {
    const currentData = await DataService.getCurrentForecast(location);
    const dailyData = await DataService.getDailyForecast(location);
    const hourlyData = await DataService.getHourlyForecast(location);

    setCurrentData(currentData);
    setDailyData(dailyData);
    setHourlyData(hourlyData);
    setIsLoaded(true);
  }, []);

  useEffect(async () => {
    if (isCurrent) {
      const currentData = await DataService.getCurrentForecast(location);

      setCurrentData(currentData);
    }
  }, [isCurrent]);

  function onDayForecastCardClick(id) {
    const actualDayData = filterDayForecastData(dailyData, id);
    const actualHourlyData = filterHourForecastData(hourlyData, id);

    setActualHourlyData(actualHourlyData);
    setActualDayData(actualDayData);

    setIsCurrent(false);
  }

  function onCurrentCardClick() {
    setActualDayData(null);
    setIsCurrent(true);
  }

  return isLoaded ? (
    <div className={classes.fullForecast}>
      {isCurrent ? (
        <CurrentForecastCard forecastData={currentData} />
      ) : (
        <ForecastCard forecastData={actualDayData} hourlyData={actualHourlyData} />
      )}
      <div className={classes.dailyForecast}>
        <CurrentForecastButton isActive={isCurrent} onClick={onCurrentCardClick} />
        <DailyForecast
          dailyData={dailyData}
          activeCardId={actualDayData?.id}
          onClick={onDayForecastCardClick}
        />
      </div>
    </div>
  ) : (
    'Loading...'
  );
}

export default FullForecast;
