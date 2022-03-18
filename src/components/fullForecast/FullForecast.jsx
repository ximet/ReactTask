import classes from './fullForecast.scss';
import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

import { filterDayForecastData, filterHourForecastData } from '../../dataService/formatter';

import CurrentForecastCard from '../currentForecastCard/CurrentForecastCard';
import DailyForecast from '../dailyForecast/DailyForecast';
import ForecastCard from '../forecastCard/ForecastCard';
import CurrentForecastButton from '../currentForecastButton/CurrentForecastButton';
import Loader from '../loader/Loader';
import Error from '../error/Error';

function FullForecast(props) {
  const { location } = props;
  
  const [locationData, locationDataLoading, locationDataError] = useFetch('location', location);
  const [currentData, currentDataLoading, currentDataError] = useFetch('current', location);
  const [dailyData, dailyDataLoading, dailyDataError] = useFetch('daily', location);
  const [hourlyData, hourlyDataLoading, hourlyDataError] = useFetch('hourly', location);

  const [isCurrent, setIsCurrent] = useState(true);
  const [actualDayData, setActualDayData] = useState(null);
  const [actualHourlyData, setActualHourlyData] = useState([]);

  const isLoading = locationDataLoading || currentDataLoading || dailyDataLoading || hourlyDataLoading;
  const isError = locationDataError || currentDataError || dailyDataError || hourlyDataError;

  if(isLoading) {
    return <div className={classes.loader}> <Loader /></div>
  }

  if(isError) {
    return <Error />
  }

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

  return (
    <div className={classes.fullForecast}>
      {isCurrent ? (
        <CurrentForecastCard forecastData={currentData} locationData={locationData} />
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
  )
}

export default FullForecast;
