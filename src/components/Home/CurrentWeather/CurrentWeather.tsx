import React from 'react';
import { ENDPOINTS } from '../../../helpers/api';
import { useGetRequest } from '../../../hooks/useGetRequest';
import ErrorComponent from '../../UI/ErrorComponent/ErrorComponent';
import Loading from '../../UI/Loading/Loading';
import Title from './../../UI/Title/Title';

interface CurrentWeatherProps {
  userLocation: string;
}

const CurrentWeather: React.FunctionComponent<CurrentWeatherProps> = ({ userLocation }) => {
  const { data, loading, error } = useGetRequest(ENDPOINTS.current, userLocation); //How to set type to data??

  return (
    <>
      {loading && <Loading />}
      {error && <ErrorComponent message={error} button="TRY_AGAIN" />}
      {!loading && !error && (
        <>
          <Title title={`Current weather`} />
          <div>{JSON.stringify(data)}</div>
        </>
      )}
    </>
  );
};

export default CurrentWeather;
