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
    <Card width="40%">
      <Title title="Next 24 hours" />
      {data ? (
        <>
          <ul className={styles.container}>
            {data.forecast.slice(0, 8).map(forecast => (
              <li key={forecast.time} className={styles.innerContainer}>
                {
                  <>
                    <p className={styles.time}>
                      <b>{forecast.time.substring(11, 16)}</b>
                    </p>
                    <div className={styles.symbol}>
                      <img
                        className={styles.symbolImage}
                        src={ENDPOINTS.symbol + forecast.symbol + '.png'}
                      />
                    </div>

                    <p className={styles.temperature}>
                      <b>
                        {tempUnit === TempUnits.FAHRENHEIT
                          ? `${convertToFahrenheit(forecast.temperature)} °F`
                          : `${forecast.temperature} °C`}
                      </b>
                    </p>
                    <div className={styles.precipProb}>
                      <WiRaindrops />
                      <p> {forecast.precipProb} %</p>
                    </div>
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
