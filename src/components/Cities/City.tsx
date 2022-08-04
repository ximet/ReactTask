import { Card, ErrorComponent, Loading, Title } from 'components';
import { ENDPOINTS } from 'consts';
import { convertToFahrenheit } from 'helpers';
import { useGetRequest } from 'hooks';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CombinedState, TempUnits, Theme, ThemeContext, ThemeContextConfig } from 'store';
import { CityConfig, CurrentData, RequestDataConfig } from 'types/interfaces';
import styles from './Cities.module.scss';

interface CityProps {
  city: CityConfig;
}

const City: React.FunctionComponent<CityProps> = ({ city }) => {
  const { theme }: ThemeContextConfig = useContext(ThemeContext);
  const { data, loading, error }: RequestDataConfig<CurrentData> = useGetRequest(
    ENDPOINTS.current,
    city.id
  );
  const tempUnit = useSelector<CombinedState, TempUnits>(state => state.tempUnit);

  return (
    <li className={styles.cardContainer}>
      <Card>
        <Title title={`${city.name}, ${city.country}`} fontSize="1.7rem" />
        {data ? (
          <div className={styles.dataContainer}>
            <div>
              <p className={styles.date}>{`${data.current.time.slice(0, 10)} ${new Date(
                data.current.time
              ).toLocaleDateString('en-US', { weekday: 'long' })}`}</p>
              <p>{`updated at ${data.current.time.substring(11, 16)} (local time)`}</p>
            </div>
            <p className={styles.temperature}>
              {tempUnit === TempUnits.FAHRENHEIT
                ? `${convertToFahrenheit(data.current.temperature)} °F`
                : `${data.current.temperature} °C`}
            </p>
            <img
              className={styles.symbol}
              src={ENDPOINTS.symbol + data.current.symbol + '.png'}
              alt={data.current.symbolPhrase}
            />
          </div>
        ) : (
          loading && <Loading />
        )}
        <ErrorComponent message={error} button="TRY_AGAIN" error={error} />
        <Link
          to={`/cities/${city.id}`}
          className={`${styles.link} ${theme === Theme.DARK && styles[theme]}`}
        >
          See full forecast &gt;&gt;
        </Link>
      </Card>
    </li>
  );
};

export default City;
