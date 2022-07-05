import React from 'react';
import { ENDPOINTS } from '../../../helpers/api';
import { CurrentData } from '../../../helpers/Interfaces';
import { useGetRequest } from '../../../hooks/useGetRequest';
import ErrorComponent from '../../UI/ErrorComponent/ErrorComponent';
import Loading from '../../UI/Loading/Loading';
import Title from './../../UI/Title/Title';
import Card from '../../UI/Card/Card';

interface CurrentWeatherProps {
  location: string;
}

const CurrentWeather: React.FunctionComponent<CurrentWeatherProps> = ({ location }) => {
  const {
    data,
    loading,
    error
  }: {
    data: CurrentData;
    loading: boolean;
    error: string | null;
  } = useGetRequest(ENDPOINTS.current, location);

  return (
    <Card>
      {loading && <Loading />}
      {error && <ErrorComponent message={error} button="TRY_AGAIN" />}
      {!loading && !error && (
        <>
          <Title title={`Current weather`} />
          <div>{JSON.stringify(data)}</div>
        </>
      )}
    </Card>
  );
};

export default CurrentWeather;
