import useGetLocation from 'hooks/useGetLocation';
import React, { createContext, useState, useMemo, FC, useEffect } from 'react';
import { GeolocationCoordinates } from 'types';

export type LocationContextData = {
  coordinates: GeolocationCoordinates | null;
  statusMsg: string | null;
  setCoordinates: (coordinates: GeolocationCoordinates | null) => void;
  setStatusMsg: (statusMsg: string | null) => void;
};

const LocationContext = createContext<LocationContextData>({
  coordinates: null,
  statusMsg: '',
  setCoordinates: () => {
    return null;
  },
  setStatusMsg: () => {
    return null;
  }
});

export const LocationProvider: FC<React.ReactNode> = ({ children }) => {
  const { coords, status } = useGetLocation();
  const [coordinates, setCoordinates] = useState<GeolocationCoordinates | null>(null);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  useEffect(() => {
    setCoordinates(coords);
    setStatusMsg(status);
  }, [coords, status]);

  const locationContext = useMemo(() => {
    return { coordinates, setCoordinates, statusMsg, setStatusMsg };
  }, [coordinates, statusMsg]);

  return <LocationContext.Provider value={locationContext}>{children}</LocationContext.Provider>;
};

export default LocationContext;
