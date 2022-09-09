/* global GeolocationCoordinates PositionCallback GeolocationPosition PositionErrorCallback GeolocationPositionError */
import { useState, useEffect } from 'react';

interface useGeoLocationProps {
  enableHighAccuracy?: false;
  timeout?: typeof Infinity;
  maximumAge?: 0;
}

function useGeoLocation(options?: useGeoLocationProps) {
  const [location, setLocation] = useState<{ lat: number; lon: number }>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null | GeolocationPositionError>(null);

  const handleSuccess: PositionCallback = (position: GeolocationPosition): void => {
    const { latitude: lat, longitude: lon }: GeolocationCoordinates = position.coords;

    setLocation({ lat, lon });
    setError(null);
    setLoading(false);
  };

  const handleError: PositionErrorCallback = (err: GeolocationPositionError): void => {
    setError(err.message);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);

    const { geolocation } = navigator;

    if (!geolocation) {
      setError('Geolocation is not supported.');
      setLoading(false);
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [options]);

  return { location, loading, error };
}

export default useGeoLocation;
