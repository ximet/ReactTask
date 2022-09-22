import React, { FunctionComponent, useEffect, useCallback } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Store
import { useAppSelector } from 'redux/hooks';
import { getLocationInfo, setLocationQuery } from 'redux/actionCreators/location';

// Custom hooks
import useGeoLocation from 'hooks/useGeoLocation';

// Assets
import { IconLocation } from 'assets/images/svg';

// Components
import RequestDataWrapper from 'components/RequestDataWrapper/RequestDataWrapper';

// Styles
import { Flex } from 'styles/global';
import * as S from './GeoLocation.styles';

const GeoLocation: FunctionComponent = () => {
  const { pathname } = useLocation();
  const { locationId } = useParams();

  const dispatch = useDispatch();

  const { location: pos, loading: posLoading, error: posError } = useGeoLocation();

  const query = !pathname.includes('location') ? `${pos?.lon}, ${pos?.lat}` : `${locationId}`;

  const { data, loading: infoLoading, error: infoError } = useAppSelector(
    state => state.location.info
  );

  // Handlers
  const handleGetLocationInfo = useCallback(() => {
    if (pos) dispatch(getLocationInfo(query));
  }, [dispatch, query, pos]);
  const handleSetLocationQuery = useCallback(() => {
    if (pos) dispatch(setLocationQuery(query));
  }, [dispatch, query, pos]);

  useEffect(() => {
    handleGetLocationInfo();
  }, [handleGetLocationInfo]);

  useEffect(() => {
    handleSetLocationQuery();
  }, [handleSetLocationQuery]);

  return (
    <S.GeoLocation>
      <Flex>
        <IconLocation />
        <RequestDataWrapper
          data={data}
          loading={posLoading || infoLoading}
          error={posError || infoError}
        >
          <p>
            <span>{data?.name}</span>, {data?.country}
          </p>
        </RequestDataWrapper>
      </Flex>
    </S.GeoLocation>
  );
};

export default GeoLocation;
