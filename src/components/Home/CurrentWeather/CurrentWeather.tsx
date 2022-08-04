import { Card, ErrorComponent, Loading, Title } from 'components';
import { ENDPOINTS } from 'consts';
import { convertToFahrenheit } from 'helpers';
import { useGetRequest } from 'hooks';
import React from 'react';
import { useSelector } from 'react-redux';
import { CombinedState, TempUnits } from 'store';
import { CurrentData, LocationInfo, RequestDataConfig } from 'types/interfaces';
import styles from './CurrentWeather.module.scss';

interface CurrentWeatherProps {
  location: string;
  locationInfo: LocationInfo;
}

const CurrentWeather: React.FunctionComponent<CurrentWeatherProps> = ({
  location,
  locationInfo
}) => {
  const { data, loading, error }: RequestDataConfig<CurrentData> = useGetRequest(
    ENDPOINTS.current,
    location
  );
  const tempUnit = useSelector<CombinedState, TempUnits>(state => state.tempUnit);
  return (
    <Card id="current" width={window.screen.width > 1060 ? '55%' : '100%'}>
      {data ? (
        <>
          {locationInfo && <Title title={`Now in ${locationInfo.name}, ${locationInfo.country}`} />}
          <div className={styles.temperature}>
            <p className={styles.currentTemperature}>
              {tempUnit === TempUnits.FAHRENHEIT
                ? `${convertToFahrenheit(data.current.temperature)} °F`
                : `${data.current.temperature} °C`}
            </p>
          </div>
          <div className={styles.container}>
            <div className={styles.innerContainer}>
              <img
                className={styles.symbol}
                src={ENDPOINTS.symbol + data.current.symbol + '.png'}
                alt={data.current.symbolPhrase}
              />
              <p className={styles.feelsLike}>
                <b>
                  {data.current.symbolPhrase.charAt(0).toUpperCase() +
                    data.current.symbolPhrase.slice(1)}
                </b>
              </p>
              <p className={styles.feelsLike}>
                Feels like
                <b>
                  {tempUnit === TempUnits.FAHRENHEIT
                    ? ` ${convertToFahrenheit(data.current.feelsLikeTemp)} °F`
                    : ` ${data.current.feelsLikeTemp} °C`}
                </b>
              </p>
            </div>
            <div className={styles.innerContainer}>
              <p className={styles.label}>Wind: </p>
              <p className={styles.value}>
                <b>{data.current.windSpeed} m/s</b>
              </p>

              <p className={styles.label}>Wind Direction: </p>
              <p className={styles.value}>
                <b>{data.current.windDirString}</b>
              </p>

              <p className={styles.label}>Precipitation: </p>
              <p className={styles.value}>
                <b>{data.current.precipProb} %</b>
              </p>

              <p className={styles.label}>Pressure: </p>
              <p className={styles.value}>
                <b>{data.current.pressure} mmHg</b>
              </p>

              <p className={styles.label}>UV index: </p>
              <p className={styles.value}>
                <b>{data.current.uvIndex}</b>
              </p>
            </div>
          </div>
        </>
      ) : (
        loading && <Loading />
      )}
      <ErrorComponent message={error} button="TRY_AGAIN" error={error} />
    </Card>
  );
};

export default CurrentWeather;
