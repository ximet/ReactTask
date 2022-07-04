import React from 'react';

interface LocationContext {
  setLocationId: (locationId: string) => void;
}

export const LocationContext: React.Context<LocationContext> = React.createContext({
  setLocationId: locationId => {}
});
