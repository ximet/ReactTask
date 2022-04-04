import React from 'react';
import classes from './LocationDropdown.module.css';
import LocationTile from '../../atomic-components/LocationTile/LocationTile';

const sortSearchResults = searchResults => {
  const sortByCountry = searchResults.sort(function (firstCountry, secondCountry) {
    return firstCountry.country.localeCompare(secondCountry.country);
  });
  const sortByCity = sortByCountry.sort(function (firstCity, secondCity) {
    return firstCity.name.localeCompare(secondCity.name);
  });
  const sortedDataFirstTen = sortByCity.slice(0, 10);

  return sortedDataFirstTen;
};

const LocationDropdown = ({ display, searchResults, onLocationSelect }) => {
  return (
    <div className={classes.search_dropdown}>
      {display &&
        (searchResults?.length ? (
          sortSearchResults(searchResults).map(item => (
            <div key={item.id} className={classes.search_dropdown_item}>
              <LocationTile location={item} selected={onLocationSelect} />
            </div>
          ))
        ) : (
          <div className={classes.search_dropdown_item}>No location found</div>
        ))}
    </div>
  );
};

export default LocationDropdown;
