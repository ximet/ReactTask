import React from 'react';
import { ENDPOINTS } from '../../../../../helpers/api';
import { LocationInfo, RequestDataConfig } from '../../../../../helpers/Interfaces';
import { useGetRequest } from '../../../../../hooks/useGetRequest';
import styles from './../SearchResults.module.scss';

interface SavedLocationsProps {
  clickHandler: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  savedSearch: string;
}

const SavedLocations: React.FunctionComponent<SavedLocationsProps> = ({
  clickHandler,
  savedSearch
}) => {
  const { data, loading, error }: RequestDataConfig<LocationInfo> = useGetRequest(
    ENDPOINTS.locationInfo,
    savedSearch
  );

  return (
    <>
      {data && (
        <li className={styles.listElement}>
          <div className={styles.locationName} id={data.id.toString()} onClick={clickHandler}>
            {data.name}, {data.adminArea && `${data.adminArea},`} {data.country}
          </div>
        </li>
      )}
    </>
  );
};

export default SavedLocations;
