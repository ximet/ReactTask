import React, { FunctionComponent } from 'react';

// API
import { useGetLocationInfoQuery } from '../../../services/forecaApi';

// Custom hooks
import useGeoLocation from '../../hooks/useGeoLocation';

// Styles
import { Flex } from '../../styles/global';
import * as S from './styles';

// Assets
import { IconLocation } from '../../assets/images/svg';

const GeoLocation: FunctionComponent = () => {
  const { location: pos, loading: posLoading, error: posError } = useGeoLocation();
  const { data, isLoading: infoLoading, isError: infoError } = useGetLocationInfoQuery(
    `${pos?.lon}, ${pos?.lat}`,
    {
      skip: !pos
    }
  );

  let locationInfo;
  if (posLoading || infoLoading) locationInfo = <p>Loading data...</p>;
  if (posError || infoError) locationInfo = <p>No data available</p>;
  if (data)
    locationInfo = (
      <p>
        <span>{data.name}</span>, {data.country}
      </p>
    );

  return (
    <S.GeoLocation>
      <Flex>
        <IconLocation />
        {locationInfo}
      </Flex>
    </S.GeoLocation>
  );
};

export default GeoLocation;
