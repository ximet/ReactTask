import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Dispatch } from 'redux';
import { ENDPOINTS } from '../../helpers/api';
import { LocationInfo, RequestDataConfig } from '../../helpers/Interfaces';
import { useGeoLocation } from '../../hooks/useGeoLocation';
import { LocationActionConfig, LocationActions } from '../../store/location-redux';
import ErrorComponent from '../UI/ErrorComponent/ErrorComponent';
import Loading from '../UI/Loading/Loading';
import { useGetRequest } from './../../hooks/useGetRequest';
import { ThemeContext, ThemeContextConfig } from './../../store/theme-context';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import DailyForecast from './DailyForecast/DailyForecast';
import styles from './Home.module.scss';
import Search from './Search/Search';
import Today3Hourly from './Today3Hourly/Today3Hourly';

const Home: React.FunctionComponent = () => {
  const { theme }: ThemeContextConfig = useContext(ThemeContext);
  const {
    userLocation,
    error: locationError,
    loading: locationLoading
  }: {
    userLocation: string;
    error: string | null;
    loading: boolean;
  } = useGeoLocation();
  const { cityId } = useParams<string>();
  const locationParam = cityId || userLocation;
  const { data: locationInfo, loading, error }: RequestDataConfig<LocationInfo> = useGetRequest(
    ENDPOINTS.locationInfo,
    locationParam
  );
  const dispatch: Dispatch<LocationActionConfig> = useDispatch();

  useEffect(() => {
    dispatch({ type: LocationActions.SAVE_CURRENT_LOCATION, payload: userLocation });
  }, [userLocation]);

  return (
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
  );
};

export default Home;
