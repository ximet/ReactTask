import React, { FC, useContext } from 'react';
import { getCurrentWeather, getDailyWeather, getHourlyWeather, getLocation } from 'API/get';
import LocationContext from 'contexts/LocationContext';
import useGetData from 'hooks/useGetData';
import { Loader } from 'components/Loader/Loader';
import MainView from 'components/MainView/MainView';
import styles from '../../components/Loader/styles.module.scss';

const Main: FC = () => {
  const { statusMsg } = useContext(LocationContext);

  const {
    currentWeather,
    locationData,
    forecast,
    hourlyForecast,
    setHourlyForecast,
    isLoading,
    errorMsg
  } = useGetData({ getCurrentWeather, getDailyWeather, getHourlyWeather, getLocation });

  if (isLoading) {
    return statusMsg || errorMsg ? (
      <div className={styles.loaderContainer}>{statusMsg || errorMsg}</div>
    ) : (
      <Loader />
    );
  }

  return (
    <MainView
      setHourlyForecast={setHourlyForecast}
      statusMsg={statusMsg}
      currentWeather={currentWeather}
      locationData={locationData}
      forecast={forecast}
      hourlyForecast={hourlyForecast}
    />
  );
};

export default Main;
