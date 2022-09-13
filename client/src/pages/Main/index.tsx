import React, { FC, useContext } from 'react';
import { getCurrentWeather, getDailyWeather, getHourlyWeather, getLocation } from 'API/get';
import LocationContext from 'contexts/LocationContext';
import useGetData from 'hooks/useGetData';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import MainView from 'components/MainView/MainView';

type LocationParams = {
  location: string | undefined;
};

const Main: FC = () => {
  const { location } = useParams<LocationParams>();
  const { coordinates, statusMsg } = useContext(LocationContext);

  const {
    currentWeather,
    locationData,
    forecast,
    hourlyForecast,
    setHourlyForecast,
    isLoading
  } = useGetData(getCurrentWeather, getDailyWeather, getHourlyWeather, getLocation, {
    coordinates,
    location
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <MainView
      coordinates={coordinates}
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
