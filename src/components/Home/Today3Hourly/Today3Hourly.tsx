import React from 'react';
import { useSelector } from 'react-redux';
import { ENDPOINTS } from '../../../helpers/api';
import { convertToFahrenheit } from '../../../helpers/convertToFahrenheit';
import { RequestDataConfig, ThreeHourlyData } from '../../../helpers/Interfaces';
import { useGetRequest } from '../../../hooks/useGetRequest';
import { CombinedState } from '../../../store/index-redux';
import { TempUnits } from '../../../store/tempUnits-redux';
import Card from '../../UI/Card/Card';
import ErrorComponent from '../../UI/ErrorComponent/ErrorComponent';
import WiRaindrops from '../../UI/Icons/WiRaindrops';
import Loading from '../../UI/Loading/Loading';
import Title from '../../UI/Title/Title';
import styles from './Today3Hourly.module.scss';

interface TodayHourlyProps {
  location: string;
}

const TodayHourly: React.FunctionComponent<TodayHourlyProps> = ({ location }) => {
  const { data, loading, error }: RequestDataConfig<ThreeHourlyData> = useGetRequest(
    ENDPOINTS.threeHourly,
    location
  );
  const tempUnit = useSelector<CombinedState, TempUnits>(state => state.tempUnit);

  return (
    <Card>
      <Title title="Next 24 hours" />
      {data ? (
        <>
          <ul className={styles.container}>
            {data.forecast.slice(0, 8).map(forecast => (
              <li key={forecast.time} className={styles.innerContainer}>
                {
                  <>
                    <p>
                      <b>{forecast.time.substring(11, 16)}</b>
                    </p>
                    <img
                      className={styles.symbol}
                      src={ENDPOINTS.symbol + forecast.symbol + '.png'}
                    />
                    <p>{forecast.symbolPhrase}</p>
                    <p>
                      <b>
                        {tempUnit === TempUnits.FAHRENHEIT
                          ? `${convertToFahrenheit(forecast.temperature)} °F`
                          : `${forecast.temperature} °C`}
                      </b>
                    </p>
                    <WiRaindrops />
                    <p> {forecast.precipProb} %</p>
                  </>
                }
              </li>
            ))}
          </ul>
        </>
      ) : loading ? (
        <Loading />
      ) : (
        error && <ErrorComponent message={error} button="TRY_AGAIN" />
      )}
    </Card>
  );
};

export default TodayHourly;
