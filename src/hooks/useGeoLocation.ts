import { useState, useEffect } from 'react';

export const useGeoLocation = () => {
  const [userLocation, setUserLocation] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const successCallback: PositionCallback = position => {
      const lat: number = position.coords.latitude;
      const long: number = position.coords.longitude;
      setUserLocation(`${long.toString()},${lat.toString()}`);
      setLoading(false);
    };
    const errorCallback: PositionErrorCallback = err => {
      setError(err.message);
      setLoading(false);
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, [navigator]);

  return { userLocation, error, loading };
};
