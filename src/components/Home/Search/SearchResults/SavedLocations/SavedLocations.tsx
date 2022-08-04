import { Loading } from 'components';
import { ENDPOINTS } from 'consts';
import { useGetRequest } from 'hooks';
import React from 'react';
import { LocationInfo, RequestDataConfig } from 'types/interfaces';
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
        error && null
      )}
    </>
  );
};

export default SavedLocations;
