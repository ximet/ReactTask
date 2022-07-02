import React from 'react';
import Title from './../../UI/Title/Title';
import { useGetRequest } from './../../../hooks/useGetRequest';
import { ENDPOINTS } from './../../../helpers/api';
import Loading from '../../UI/Loading/Loading';
import ErrorComponent from '../../UI/ErrorComponent/ErrorComponent';
import { DailyForecastData } from '../../../helpers/Interfaces';

interface DailyForecastProps {
  location: string;
}

const DailyForecast: React.FunctionComponent<DailyForecastProps> = ({ location }) => {
  const { data, loading, error }: {
    data: DailyForecastData;
    loading: boolean;
    error: string | null;
  } = useGetRequest(ENDPOINTS.daily, location);

  return (
    <>
      {loading && <Loading />}
      {error && <ErrorComponent message={error} button="TRY_AGAIN" />}
      {!loading && !error && (
        <>
          <Title title="7 day forecast" />
          <div>{JSON.stringify(data)}</div>
        </>
      )}
    </>
  );
};

export default DailyForecast;
