import React, { FunctionComponent } from 'react';

// Types
import { LocationInfo, WeatherInfo } from '../../types';

interface RequestDataWrapperProps {
  data?: LocationInfo | WeatherInfo | WeatherInfo[] | null;
  loading?: boolean;
  error?: boolean | string | GeolocationPositionError | null;
}

const RequestDataWrapper: FunctionComponent<RequestDataWrapperProps> = ({
  data,
  loading,
  error,
  children
}) => {
  if (data) {
    return <>{children}</>;
  }

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return null;
};

export default RequestDataWrapper;
