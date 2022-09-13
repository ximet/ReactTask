import { getCurrentWeather, getDailyWeather, getHourlyWeather, getLocationByQuery } from 'API/get';
import LocationContext from 'contexts/LocationContext';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import MainView from 'components/MainView/MainView';
import useGetData from 'hooks/useGetData';

type LocationParams = {
  location: string | undefined;
};

const Details: React.FC = () => {
  const { location } = useParams<LocationParams>();
  const { coordinates, statusMsg } = useContext(LocationContext);

  const {
    currentWeather,
    locationData,
    forecast,
    hourlyForecast,
    setHourlyForecast,
    isLoading
  } = useGetData(getCurrentWeather, getDailyWeather, getHourlyWeather, getLocationByQuery, {
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

export default Details;
