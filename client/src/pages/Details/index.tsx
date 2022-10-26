import { getCurrentWeather, getDailyWeather, getHourlyWeather, getLocation } from 'API/get';
import LocationContext from 'contexts/LocationContext';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import MainView from 'components/MainView/MainView';
import useGetData from 'hooks/useGetData';
import { getCoordsFromString } from 'utils/getCoordsFromString';
import styles from '../../components/Loader/styles.module.scss';

const Details: React.FC = () => {
  const { setCoordinates, statusMsg } = useContext(LocationContext);
  const { location } = useParams();

  useEffect(() => {
    const getLocationData = async () => {
      if (location) {
        const searchLocationCoords = getCoordsFromString(location);
        setCoordinates(searchLocationCoords);
      }
    };
    getLocationData();
  }, [location, setCoordinates]);

  const {
    currentWeather,
    locationData,
    forecast,
    errorMsg,
    hourlyForecast,
    setHourlyForecast,
    isLoading
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

export default Details;
