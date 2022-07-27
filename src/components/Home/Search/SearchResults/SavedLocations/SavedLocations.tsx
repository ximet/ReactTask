import React from 'react';
import { ENDPOINTS } from '../../../../../helpers/api';
import { LocationInfo, RequestDataConfig } from '../../../../../helpers/Interfaces';
import { useGetRequest } from '../../../../../hooks/useGetRequest';
import Loading from '../../../../UI/Loading/Loading';
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
      {data ? (
        <li className={styles.listElement}>
          <div className={styles.locationName} id={data.id.toString()} onMouseDown={clickHandler}>
            {data.name}, {data.adminArea && `${data.adminArea},`} {data.country}
          </div>
        </li>
      ) : loading ? (
        <Loading width="30" />
      ) : (
        error && 'Could not load previous searches'
      )}
    </>
  );
};

export default SavedLocations;
