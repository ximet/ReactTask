import { useState, useEffect } from 'react';

type PositionParams = {
  latitude: number;
  longitude: number;
};

type LocationParams = {
  coords: PositionParams;
};

export const usePosition = () => {
  const [position, setPosition] = useState<PositionParams>({
    latitude: 0,
    longitude: 0
  });
  const [error, setError] = useState<string | null>(null);

  const onSuccess = ({ coords: { latitude, longitude } }: LocationParams): void => {
    setPosition({
      latitude,
      longitude
    });
  };

  const onError = (error: GeolocationPositionError): void => {
    setError(error.message);
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setError('location available');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return {
    position,
    error
  };
};
