import React from 'react';
import Title from './../../UI/Title/Title';
import { useGetRequest } from './../../../hooks/useGetRequest';
import { ENDPOINTS } from './../../../helpers/api';
import Loading from '../../UI/Loading/Loading';
import ErrorComponent from '../../UI/ErrorComponent/ErrorComponent';
import { DailyForecastData } from '../../../helpers/Interfaces';
import Card from '../../UI/Card/Card';

interface DailyForecastProps {
  location: string;
}

const DailyForecast: React.FunctionComponent<DailyForecastProps> = ({ location }) => {
  //WILL DO LATER. Now uncommented because reached API requests/day limit.

  // const {
  //   data,
  //   loading,
  //   error
  // }: {
  //   data: DailyForecastData;
  //   loading: boolean;
  //   error: string | null;
  // } = useGetRequest(ENDPOINTS.daily, location);

  return (
    <Card>
      {/* {loading && <Loading />}
      {error && <ErrorComponent message={error} button="TRY_AGAIN" />}
      {!loading && !error && ( */}
      <>
        <Title title="7 day forecast" />
        {/* <div>{JSON.stringify(data)}</div> */}
      </>
      {/* )} */}
    </Card>
  );
};

export default DailyForecast;
