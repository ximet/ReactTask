import React, { useState } from 'react';
import { ENDPOINTS } from '../../helpers/api';
import { LocationInfo, RequestDataConfig } from '../../helpers/Interfaces';
import { LocationContext } from '../../store/location-context';
import ErrorComponent from '../UI/ErrorComponent/ErrorComponent';
import Loading from '../UI/Loading/Loading';
import { useGetRequest } from './../../hooks/useGetRequest';
import { useLocation } from './../../hooks/useLocation';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import DailyForecast from './DailyForecast/DailyForecast';
import styles from './Home.module.scss';
import Search from './Search/Search';
import Today3Hourly from './Today3Hourly/Today3Hourly';

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

  const locationParam = locationId || userLocation;
  const { data: locationInfo, loading, error }: RequestDataConfig<LocationInfo> = useGetRequest(
    ENDPOINTS.locationInfo,
    locationParam
  );

  return (
    <LocationContext.Provider value={{ setLocationId }}>
      <Search />
      <main className={styles.main}>
        {userLocation ? (
          <>
            <div className={styles.container}>
              <CurrentWeather location={locationParam} locationInfo={locationInfo} />
              <Today3Hourly location={locationParam} />
            </div>
            <DailyForecast location={locationParam} />
          </>
        ) : locationLoading ? (
          <Loading />
        ) : (
          locationError && <ErrorComponent message={locationError} button="TRY_AGAIN" />
        )}
      </main>
    </LocationContext.Provider>
  );
};

export default Home;
