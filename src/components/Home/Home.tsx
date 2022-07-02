import React from 'react';
import ErrorComponent from '../UI/ErrorComponent/ErrorComponent';
import Loading from '../UI/Loading/Loading';
import { useLocation } from './../../hooks/useLocation';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import DailyForecast from './DailyForecast/DailyForecast';
import Search from './Search/Search';

const Home: React.FunctionComponent = () => {
  const {
    userLocation,
    error: locationError,
    loading: locationLoading
  }: {
    userLocation: string;
    error: string | null;
    loading: boolean;
  } = useLocation();

  return (
    <>
      <Search />
      {locationLoading && <Loading />}
      {locationError && <ErrorComponent message={locationError} button="TRY_AGAIN" />}
      {!locationLoading && !locationError && (
        <>
          <CurrentWeather userLocation={userLocation} />
          <DailyForecast userLocation={userLocation} />
        </>
      )}
    </>
  );
};

export default Home;
