import React, { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const cardClickHandler = (lat: number, lon: number) => {
    changePosition(lat, lon);
    navigate(`/${lon},${lat}`);
  };

  return (
    <div className={styles['cities-wrapper']}>
      {locations
        .filter(location => location.country === country)
        .map(city => (
          <div
            key={city.id}
            className={styles['city-card']}
            onClick={() => cardClickHandler(city.lat, city.lon)}
          >
            <CitySmallCard lon={city.lon} lat={city.lat} cityName={city.name} />
          </div>
        ))}
    </div>
  );
};
