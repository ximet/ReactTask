import React, { FunctionComponent } from 'react';

// Store
import { useAppSelector } from '../../../../app/hooks';

// API
import { useGetCurrLocationWeatherQuery } from '../../../../services/forecaApi';

// Components
import Widget from '../../Widget';

// Styles
import * as S from '../styles';

const DashboardCurrent: FunctionComponent = () => {
  const { query } = useAppSelector(state => state.location);

  const { data, isLoading, isError } = useGetCurrLocationWeatherQuery(query, {
    skip: !query
  });

  return (
    <S.DashboardCurrent>
      <h3>Current weather</h3>
      <Widget color="primary" data={data && data.current} isLoading={isLoading} isError={isError} />
    </S.DashboardCurrent>
  );
};

export default DashboardCurrent;
