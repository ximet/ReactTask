import { Loader } from 'components/Loader/Loader';
import useGetSearchRequest from 'hooks/useGetSearchRequest';
import React from 'react';
import styles from './SearchSavedLocation.module.scss';

interface SavedLocationsProps {
  clickHandler: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  savedSearch: string;
}

const SearchSavedLocations: React.FunctionComponent<SavedLocationsProps> = ({
  clickHandler,
  savedSearch
}) => {
  const { searchData, isLoading, errorMsg } = useGetSearchRequest(savedSearch);
  console.log('searchData', searchData);
  return (
    <div>
      {searchData ? (
        <li className={styles.listElement}>
          <div
            className={styles.locationName}
            // id={searchData.locations} // .id.toString()}
            onMouseDown={clickHandler}
          >
            {/* {searchData?.locations.name}, {searchData.locations.adminArea && `${searchData.locations.adminArea},`}
            {searchData.locations.country} */}
          </div>
        </li>
      ) : isLoading ? (
        <Loader />
      ) : (
        errorMsg && null
      )}
    </div>
  );
};

export default SearchSavedLocations;
