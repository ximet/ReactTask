import React from 'react';
import { ENDPOINTS } from '../../../helpers/api';
import { ThreeHourlyData } from '../../../helpers/Interfaces';
import { useGetRequest } from '../../../hooks/useGetRequest';
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
  const {
    data,
    loading,
    error
  }: {
    data: ThreeHourlyData;
    loading: boolean;
    error: string | null;
  } = useGetRequest(ENDPOINTS.threeHourly, location);

  return (
    <Card>
      {loading && <Loading />}
      {error && <ErrorComponent message={error} button="TRY_AGAIN" />}
      {!loading && !error && data && (
        <>
          <Title title="Next 24 hours" />
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
                      <b>{forecast.temperature} °C</b>
                    </p>
                    <WiRaindrops />
                    <p> {forecast.precipProb} %</p>
                  </>
                }
              </li>
            ))}
          </ul>
        </>
      )}
    </Card>
  );
};

export default TodayHourly;
