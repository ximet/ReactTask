import React, { PropsWithChildren } from 'react';

interface RequestDataWrapperProps<T> {
  data?: T | T[];
  loading?: boolean;
  error?: boolean | string | GeolocationPositionError | null;
}

const RequestDataWrapper = <T extends unknown>({
  data,
  loading,
  error,
  children
}: PropsWithChildren<RequestDataWrapperProps<T>>) => {
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
