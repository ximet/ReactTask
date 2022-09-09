/* global GeolocationPositionError */
import React, { ReactNode } from 'react';

// Types
import { LocationInfo } from '../../../types';

export const renderConditionalJSX = (
  data: LocationInfo,
  loading: boolean,
  error: boolean | string | GeolocationPositionError | null
): ReactNode => {
  if (data) {
    return (
      <p>
        <span>{data.name}</span>, {data.country}
      </p>
    );
  }

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>No data available</p>;
  }

  return null;
};
