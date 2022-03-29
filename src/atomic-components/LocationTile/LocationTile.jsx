import React from 'react';
import { useHistory } from 'react-router-dom';

const formatCityTile = city => {
  if (city.country === undefined) {
    return `${city.name}`;
  }
  const formattedTile = `${city.name}, ${city.country}`;
  if (city.state) {
    return formattedTile.concat(`, ${city.state}`);
  }
  return formattedTile;
};

const LocationTile = ({ location, selected }) => {
  const history = useHistory();

  const handleMouseDown = () => {
    history.push(`/location/${location.id}`);
    selected();
  };

  return <div onMouseDown={handleMouseDown}>{formatCityTile(location)}</div>;
};

export default LocationTile;
