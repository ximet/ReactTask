import { useState, useEffect } from 'react';

export type GeolocationCoordinates = {
  lon: number;
  lat: number;
};

const useGetLocation = (): {
  coords: GeolocationCoordinates | null;
  status: string | null;
} => {
  const [coords, setCoords] = useState<GeolocationCoordinates | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition(
        position => {
          setStatus(null);
          const coordinates = {
            lon: position.coords.longitude,
            lat: position.coords.latitude
          };
          setCoords(coordinates);
        },
        () => {
          setStatus('Unable to retrieve your location');
        }
      );
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { coords, status };
};

export default useGetLocation;
