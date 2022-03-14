import React, { useEffect, useState } from 'react';
import { getLocationInfoByName } from '../../api';
import { url } from '../../constants';
import classes from './LocationSelect.module.scss';

const LocationSelect = ({ locationNames }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    Promise.all(
      locationNames.map(async name => await getLocationInfoByName(url, name))
    ).then(locations => setLocations(locations));
  }, [locationNames]);

  return (
    <select>
      {locations.length ? (
        locations.map(({ name, country }) => (
          <option value={name}>
            {name}, {country}
          </option>
        ))
      ) : (
        <option disabled>No locations available</option>
      )}
    </select>
  );
};

export default LocationSelect;
