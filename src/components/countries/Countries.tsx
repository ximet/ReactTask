import { string } from 'prop-types';
import React, { FC, useRef, useState } from 'react';
import { getFavoriteCities } from 'services/localStorage';
import { LocationInfoType } from 'types/cityInfoType';
import { CitySmallCards } from './CitySmallCards';

import commonStyle from '../../styles/commonStyles.css';
import styles from './Countries.css';

export const Countries: FC = () => {
  const sortedByCountries: LocationInfoType[] = getFavoriteCities().sort((a, b) =>
    a.country > b.country ? 1 : -1
  );
  const countries: string[] = sortedByCountries.map(city => city.country);
  const uniqueCountries: Set<string> = new Set(countries);

  return (
    <main className={commonStyle.container}>
      {Array.from(uniqueCountries).map(countryName => (
        <section key={countryName} className={styles['country-section']}>
          <h3 className={styles['country-title']}>{countryName}</h3>
          <CitySmallCards locations={sortedByCountries} country={countryName} />
        </section>
      ))}
    </main>
  );
};
