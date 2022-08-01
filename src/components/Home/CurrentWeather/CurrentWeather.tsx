import React from 'react';
import { useSelector } from 'react-redux';
import { ENDPOINTS } from '../../../helpers/api';
import { convertToFahrenheit } from '../../../helpers/convertToFahrenheit';
import { CurrentData, LocationInfo, RequestDataConfig } from '../../../helpers/Interfaces';
import { useGetRequest } from '../../../hooks/useGetRequest';
import { CombinedState } from '../../../store/index-redux';
import { TempUnits } from '../../../store/tempUnits-redux';
import Card from '../../UI/Card/Card';
import ErrorComponent from '../../UI/ErrorComponent/ErrorComponent';
import Loading from '../../UI/Loading/Loading';
import Title from './../../UI/Title/Title';
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
    <Card id="current">
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
                    data.current.symbolPhrase.slice(1) +
                    '. '}
                </b>
                Feels like
                <b>
                  {tempUnit === TempUnits.FAHRENHEIT
                    ? ` ${convertToFahrenheit(data.current.feelsLikeTemp)} °F`
                    : ` ${data.current.feelsLikeTemp} °C`}
                </b>
              </p>
            </div>
            <div className={styles.innerContainer}>
              <p>
                Wind: <b>{data.current.windSpeed} m/s</b>
              </p>
              <p>
                Wind Direction: <b>{data.current.windDirString}</b>
              </p>
              <p>
                Precipitation: <b>{data.current.precipProb} %</b>
              </p>
              <p>
                Pressure: <b>{data.current.pressure} mmHg</b>
              </p>
              <p>
                UV index: <b>{data.current.uvIndex}</b>
              </p>
            </div>
          </div>
        </>
      ) : loading ? (
        <Loading />
      ) : (
        error && <ErrorComponent message={error} button="TRY_AGAIN" />
      )}
    </Card>
  );
};

export default CurrentWeather;
