import { getImgURL } from 'helpers';
import React, { FC } from 'react';
import { LocationInfoType } from 'types/cityInfoType';
import { CitySmallCard } from './CitySmallCard';
import styles from './Countries.css';

type CityPropsType = {
  locations: LocationInfoType[];
  country: string;
};

export const CitySmallCards: FC<CityPropsType> = ({ locations, country }) => {
  return (
    <div className={styles['cities-wrapper']}>
      {locations
        .filter(location => location.country === country)
        .map(city => (
          <div key={city.id} className={styles['city-card']}>
            <CitySmallCard lon={city.lon} lat={city.lat} cityName={city.name} />
          </div>
        ))}
    </div>
  );
};
