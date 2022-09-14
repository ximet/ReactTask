import React, { FunctionComponent, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Store
import { useAppSelector } from 'redux/hooks';
import { getLocationCurrWeather } from 'redux/actionCreators/location';

// Components
import RequestDataWrapper from 'components/RequestDataWrapper/RequestDataWrapper';
import Widget from 'components/Widget/Widget';

// Styles
import * as S from '../Dashboard.styles';

const DashboardCurrent: FunctionComponent = () => {
  const query = useAppSelector(state => state.location.query);
  const { data, loading, error } = useAppSelector(state => state.location.weather.current);

  const dispatch = useDispatch();

  const handleGetLocationCurrWeather = useCallback(() => {
    if (query) dispatch(getLocationCurrWeather(query));
  }, [dispatch, query]);

  useEffect(() => {
    handleGetLocationCurrWeather();
  }, [handleGetLocationCurrWeather]);

  return (
    <S.DashboardCurrent>
      <h3>Current weather</h3>
      <RequestDataWrapper data={data} loading={loading} error={error}>
        <Widget color="primary" data={data} />
      </RequestDataWrapper>
    </S.DashboardCurrent>
  );
};

export default DashboardCurrent;
