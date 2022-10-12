import React, { PropsWithChildren } from 'react';

// Store
import { useAppSelector } from 'redux/hooks';
import { selectTheme } from 'redux/reducers/global';

// Styles
import { Spinner } from 'styles/global';

interface RequestDataWrapperProps<T> {
  data?: T | T[];
  loading?: boolean;
  error?: boolean | string | GeolocationPositionError | null;
  showSpinner?: boolean;
}

const RequestDataWrapper = <T extends unknown>({
  data,
  loading,
  error,
  showSpinner = true,
  children
}: PropsWithChildren<RequestDataWrapperProps<T>>) => {
  const theme = useAppSelector(selectTheme);

  if (data) {
    return <>{children}</>;
  }

  if (loading) {
    return showSpinner ? <Spinner themeType={theme} /> : <p>Loading data...</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return null;
};

export default RequestDataWrapper;
