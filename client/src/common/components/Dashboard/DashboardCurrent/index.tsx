import React, { FunctionComponent } from 'react';

// Store
import { useAppSelector } from '../../../../app/hooks';

// API
import { useGetCurrLocationWeatherQuery } from '../../../../services/forecaApi';

// Components
import RequestDataWrapper from '../../RequestDataWrapper/RequestDataWrapper';
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
      <RequestDataWrapper data={data} loading={isLoading} error={isError}>
        <Widget color="primary" data={data && data.current} />
      </RequestDataWrapper>
    </S.DashboardCurrent>
  );
};

export default DashboardCurrent;
