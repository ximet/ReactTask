import { Card, ErrorComponent, Loading, Title, WiRaindrops } from 'components';
import { ENDPOINTS } from 'consts';
import { convertToFahrenheit } from 'helpers';
import { useGetRequest } from 'hooks';
import React from 'react';
import { useSelector } from 'react-redux';
import { CombinedState, TempUnits } from 'store';
import { RequestDataConfig, ThreeHourlyData } from 'types/interfaces';
import styles from './Today3Hourly.module.scss';

interface TodayHourlyProps {
  location: string;
}

const Today3Hourly: React.FunctionComponent<TodayHourlyProps> = ({ location }) => {
  const { data, loading, error }: RequestDataConfig<ThreeHourlyData> = useGetRequest(
    ENDPOINTS.threeHourly,
    location
  );
  const tempUnit = useSelector<CombinedState, TempUnits>(state => state.tempUnit);

  return (
    <Card width={window.screen.width > 1060 ? '40%' : '100%'}>
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
        <ErrorComponent message={error} button="TRY_AGAIN" error={error} />
      )}
    </Card>
  );
};

export default Today3Hourly;
