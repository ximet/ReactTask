import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Dispatch } from 'redux';
import { ENDPOINTS } from '../../helpers/api';
import { LocationInfo, RequestDataConfig } from '../../helpers/Interfaces';
import { useGeoLocation } from '../../hooks/useGeoLocation';
import { AuthContext, AuthContextConfig } from '../../store/auth-context';
import { LocationActionConfig, LocationActions } from '../../store/location-redux';
import ErrorComponent from '../UI/ErrorComponent/ErrorComponent';
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
  const { userHasToken }: AuthContextConfig = useContext(AuthContext);

  useEffect(() => {
    dispatch({ type: LocationActions.SAVE_CURRENT_LOCATION, payload: userLocation });
  }, [userLocation]);

  return (
    <main className={`${styles.main} ${styles[theme]}`}>
      <Search />
      {locationError && (
        <ErrorComponent
          message="Your current location is unavailable at the moment. Please check your browser settings or use search bar to search for location."
          button="TRY_AGAIN"
        />
      )}
      {userHasToken ? (
        <>
          <div className={styles.container}>
            <CurrentWeather location={locationParam} locationInfo={locationInfo} />
            <Today3Hourly location={locationParam} />
          </div>
          <DailyForecast location={locationParam} />
        </>
      ) : (
        <ErrorComponent message="No weather data available at the moment" button="TRY_AGAIN" />
      )}
    </main>
  );
};

export default Home;
