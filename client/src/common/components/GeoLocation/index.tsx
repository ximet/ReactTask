import React, { FunctionComponent, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

// Store
import { useAppDispatch } from '../../../app/hooks';
import { setLocationQuery } from '../../../features/location/locationSlice';

// API
import { useGetLocationInfoQuery } from '../../../services/forecaApi';

// Custom hooks
import useGeoLocation from '../../hooks/useGeoLocation';

// Styles
import { Flex } from '../../styles/global';
import * as S from './styles';

// Assets
import { IconLocation } from '../../assets/images/svg';

// Utils
import { renderConditionalJSX } from './utils';

const GeoLocation: FunctionComponent = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const { location: pos, loading: posLoading, error: posError } = useGeoLocation();

  // For now locationId is just a placeholder, later I will get it from URL
  const query = pathname !== '/location' ? `${pos?.lon}, ${pos?.lat}` : `locationId`;

  const { data, isLoading: infoLoading, isError: infoError } = useGetLocationInfoQuery(query, {
    skip: !pos
  });

  const handleSetLocationQuery = useCallback(() => {
    if (pos) dispatch(setLocationQuery(query));
  }, [dispatch, query, pos]);

  useEffect(() => {
    handleSetLocationQuery();
  }, [handleSetLocationQuery]);

  return (
    <S.GeoLocation>
      <Flex>
        <IconLocation />
        {renderConditionalJSX(data, posLoading || infoLoading, posError || infoError)}
      </Flex>
    </S.GeoLocation>
  );
};

export default GeoLocation;
