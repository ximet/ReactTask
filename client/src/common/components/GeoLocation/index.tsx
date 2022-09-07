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

  return (
    <S.GeoLocation>
      <Flex>
        <IconLocation />
        {(posLoading || infoLoading) && !data && <p>Loading data...</p>}
        {(posError || infoError) && !data && <p>No data available</p>}
        {data && (
          <p>
            <span>{data.name}</span>, {data.country}
          </p>
        )}
      </Flex>
    </S.GeoLocation>
  );
};

export default GeoLocation;
