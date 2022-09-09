import React, { FunctionComponent, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Store
import { useAppSelector } from 'redux/hooks';
import { getLocationInfo, setLocationQuery } from 'redux/actionCreators/location';

// Custom hooks
import useGeoLocation from '../../hooks/useGeoLocation';

// Styles
import { Flex } from '../../styles/global';
import * as S from './styles';

// Assets
import { IconLocation } from '../../assets/images/svg';

const GeoLocation: FunctionComponent = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const { location: pos, loading: posLoading, error: posError } = useGeoLocation();

  // For now locationId is just a placeholder, later I will get it from URL
  const query = pathname !== '/location' ? `${pos?.lon}, ${pos?.lat}` : `locationId`;

  const { data, loading: infoLoading, error: infoError } = useAppSelector(
    state => state.location.info
  );

  // Handlers
  const handleGetLocationInfo = useCallback(() => {
    if (pos) dispatch(getLocationInfo(query));
  }, [dispatch, query, pos]);
  const handleSetLocationQuery = useCallback(() => dispatch(setLocationQuery(query)), [
    dispatch,
    query
  ]);

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
        {data ? (
          <p>
            <span>{data.name}</span>, {data.country}
          </p>
        ) : (
          <>
            {(posLoading || infoLoading) && (!posError || !infoError) && <p>Loading data...</p>}
            {(posError || infoError) && (!posLoading || !infoLoading) && <p>No data available</p>}
          </>
        )}
      </Flex>
    </S.GeoLocation>
  );
};

export default GeoLocation;
