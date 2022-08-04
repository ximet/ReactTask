import {
  CurrentWeather,
  DailyForecast,
  ErrorComponent,
  HashNav,
  Search,
  Today1Hourly,
  Today3Hourly
} from 'components';
import { ENDPOINTS } from 'consts';
import { useGeoLocation, useGetRequest } from 'hooks';
import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Dispatch } from 'redux';
import {
  AuthContext,
  AuthContextConfig,
  LocationActionConfig,
  LocationActions,
  ThemeContext,
  ThemeContextConfig
} from 'store';
import { LocationInfo, RequestDataConfig } from 'types/interfaces';
import styles from './Home.module.scss';

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

  const locationParam = cityId === 'current' ? userLocation : cityId || userLocation;
  const { data: locationInfo, loading, error }: RequestDataConfig<LocationInfo> = useGetRequest(
    ENDPOINTS.locationInfo,
    locationParam
  );
  const dispatch: Dispatch<LocationActionConfig> = useDispatch();
  const { userHasToken }: AuthContextConfig = useContext(AuthContext);

  useEffect(() => {
    userLocation &&
      dispatch({ type: LocationActions.SAVE_CURRENT_LOCATION, payload: userLocation });
  }, [userLocation]);

  return (
    <main className={`${styles.main} ${styles[theme]}`}>
      <HashNav />
      <Search />
      {locationError && !cityId ? (
        <ErrorComponent message={locationError} button="TRY_AGAIN" error={locationError} />
      ) : userHasToken ? (
        <>
          <div className={styles.container}>
            <CurrentWeather location={locationParam} locationInfo={locationInfo} />
            <Today3Hourly location={locationParam} />
          </div>
          {window.screen.width > 650 && <Today1Hourly location={locationParam} />}
          <DailyForecast location={locationParam} />
          <HashLink to={'#top'} smooth className={styles.toTheTop}>
            Go to the top
          </HashLink>
        </>
      ) : (
        <ErrorComponent
          message="No weather data available at the moment"
          button="TRY_AGAIN"
          error={error}
        />
      )}
    </main>
  );
};

export default Home;
