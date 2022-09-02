import { useGeolocated } from 'react-geolocated';

type GeolocationCoordinates = {
  latitude: number;
  longitude: number;
  accuracy: number;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
};

const useGetLocation = (): {
  coords: GeolocationCoordinates | undefined;
  isGeolocationAvailable: boolean;
  isGeolocationEnabled: boolean;
} => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
  });
  return { coords, isGeolocationAvailable, isGeolocationEnabled };
};

export default useGetLocation;
