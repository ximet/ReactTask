import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import { Dispatch } from 'redux';
import { ENDPOINTS } from '../../helpers/api';
import { LocationInfo, RequestDataConfig } from '../../helpers/Interfaces';
import { LocationContext } from '../../store/location-context';
import { LocationActionConfig, LocationActions } from '../../store/location-redux';
import ErrorComponent from '../UI/ErrorComponent/ErrorComponent';
import Loading from '../UI/Loading/Loading';
import { useGetRequest } from './../../hooks/useGetRequest';
import { useLocation } from './../../hooks/useLocation';
import { ThemeContext, ThemeContextConfig } from './../../store/theme-context';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import DailyForecast from './DailyForecast/DailyForecast';
import styles from './Home.module.scss';
import Search from './Search/Search';
import Today3Hourly from './Today3Hourly/Today3Hourly';

const Home: React.FunctionComponent = () => {
  const { theme }: ThemeContextConfig = useContext(ThemeContext);
  const outletContext = useOutletContext<{ cityId: string }>();
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
  const locationParam = outletContext?.cityId || locationId || userLocation;
  const { data: locationInfo, loading, error }: RequestDataConfig<LocationInfo> = useGetRequest(
    ENDPOINTS.locationInfo,
    locationParam
  );
  const dispatch: Dispatch<LocationActionConfig> = useDispatch();

  useEffect(() => {
    dispatch({ type: LocationActions.SAVE_CURRENT_LOCATION, payload: userLocation });
  }, [userLocation]);

  return (
    <LocationContext.Provider value={{ setLocationId }}>
      <main className={`${styles.main} ${styles[theme]}`}>
        <Search />
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
