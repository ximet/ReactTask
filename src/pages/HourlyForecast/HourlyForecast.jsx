import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Spinner, ForecastTable } from '../../components';
import endpoints from '../../config/endpoints';
import { publicApiInstance } from '../../utils/api';
import { translations } from '../../utils/translations';

const HourlyForecast = () => {
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const { id, city } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    getHourlyForecast();
  }, [id, city, getHourlyForecast]);

  const getHourlyForecast = async () => {
    try {
      const { data } = await publicApiInstance.get(endpoints.GET_HOURLY_FORECAST_BY_ID(id));
      setHourlyForecast(data.forecast);
    } catch (error) {
      push('/weather');
      throw new Error(error);
    }
  };

  if (!hourlyForecast) {
    return <Spinner />;
  }

  return (
    <>
      <h2>{`${translations.msg_page_hourly_forecast_h1} ${city}`}</h2>
      {hourlyForecast?.map(({ symbol, time, temperature, windSpeed }, index) => (
        <ForecastTable
          key={index}
          symbol={symbol}
          time={time}
          temperature={temperature}
          windSpeed={windSpeed}
          index={index}
        />
      ))}
    </>
  );
};

export default HourlyForecast;
