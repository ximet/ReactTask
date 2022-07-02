import React, { useState } from 'react';
import ErrorComponent from '../UI/ErrorComponent/ErrorComponent';
import Loading from '../UI/Loading/Loading';
import { useLocation } from './../../hooks/useLocation';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import DailyForecast from './DailyForecast/DailyForecast';
import Search from './Search/Search';
import { useGetRequest } from './../../hooks/useGetRequest';
import { ENDPOINTS } from '../../helpers/api';
import { LocationInfo } from '../../helpers/Interfaces';

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
  const [locationId, setLocationId] = useState<string | null>(null);
  const locationParam = locationId ? locationId : userLocation;
  const {
    data: locationInfo,
    loading,
    error
  }: {
    data: LocationInfo;
    error: string | null;
    loading: boolean;
  } = useGetRequest(ENDPOINTS.locationInfo, locationParam);

  return (
    <>
      <Search setLocationId={setLocationId} />
      {locationLoading && <Loading />}
      {locationError && <ErrorComponent message={locationError} button="TRY_AGAIN" />}
      {!locationLoading && !locationError && (
        <>
          <h1>{locationInfo && `${locationInfo.name}, ${locationInfo.country}`}</h1>
          <CurrentWeather location={locationParam} />
          <DailyForecast location={locationParam} />
        </>
      )}
    </>
  );
};

export default Home;
