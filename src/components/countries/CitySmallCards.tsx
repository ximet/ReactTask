import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LocationInfoType } from 'types/cityInfoType';
import { CitySmallCard } from './CitySmallCard';
import styles from './Countries.css';
import { positionContext } from 'context/positionContext';

type CityPropsType = {
  locations: LocationInfoType[];
  country: string;
};

export const CitySmallCards: FC<CityPropsType> = ({ locations, country }) => {
  const { changePosition } = useContext(positionContext);

  const cardClickHandler = (lat: number, lon: number) => {
    changePosition(lat, lon);
  };

  return (
    <ul className={styles['cities-wrapper']}>
      {locations
        .filter(location => location.country === country)
        .map(city => (
          <li key={city.id} data-testid="city-card">
            <Link
              to={`/${city.lon},${city.lat}`}
              className={styles['city-card']}
              onClick={() => cardClickHandler(city.lat, city.lon)}
            >
              <CitySmallCard lon={city.lon} lat={city.lat} cityName={city.name} />
            </Link>
          </li>
        ))}
    </ul>
  );
};
