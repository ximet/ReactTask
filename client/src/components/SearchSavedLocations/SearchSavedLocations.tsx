import React from 'react';
import styles from './SearchSavedLocation.module.scss';

interface SavedLocationsProps {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  savedSearch: string;
}

const SearchSavedLocations: React.FunctionComponent<SavedLocationsProps> = ({
  onClick,
  savedSearch
}) => {
  const getLocationName = () => {
    return savedSearch && `${savedSearch.split('(')[0].split('-')[0]}`;
  };
  const getLocationCountry = () => {
    return savedSearch && `${savedSearch.split('(')[0].split('-')[1]}`;
  };
  const getCoordinates = () => {
    const lon = savedSearch.split('(')[1].split(')')[0];
    const lat = savedSearch.split('(')[2].split(')')[0];
    const searchLocationCoords = {
      lat: Number(lat),
      lon: Number(lon)
    };
    return searchLocationCoords;
  };
  return (
    <div>
      {savedSearch && (
        <li className={styles.listElement}>
          <div
            className={styles.locationName}
            onMouseDown={onClick}
            data-lat={getCoordinates().lat.toString()}
            data-lon={getCoordinates().lon.toString()}
            data-name={`${getLocationName()}-${getLocationCountry()}`}
          >
            {`${getLocationName()}, ${getLocationCountry()}`}
          </div>
        </li>
      )}
    </div>
  );
};

export default SearchSavedLocations;
