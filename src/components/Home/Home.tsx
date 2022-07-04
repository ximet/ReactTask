import React, { useState } from 'react';
import { ENDPOINTS } from '../../helpers/api';
import { LocationInfo } from '../../helpers/Interfaces';
import { LocationContext } from '../../store/location-context';
import ErrorComponent from '../UI/ErrorComponent/ErrorComponent';
import Loading from '../UI/Loading/Loading';
import { useGetRequest } from './../../hooks/useGetRequest';
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
  const [locationId, setLocationId] = useState<string>('');

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
      <LocationContext.Provider value={{ setLocationId: setLocationId }}>
        <Search />
        {locationLoading && <Loading />}
        {locationError && <ErrorComponent message={locationError} button="TRY_AGAIN" />}
        {!locationLoading && !locationError && (
          <>
            <h1>{locationInfo && `${locationInfo.name}, ${locationInfo.country}`}</h1>
            <CurrentWeather location={locationParam} />
            <DailyForecast location={locationParam} />
          </>
        )}
      </LocationContext.Provider>
    </>
  );
};

export default Home;
