import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import cities from '../../helpers/cities';
import Title from './../UI/Title/Title';
import styles from './Cities.module.scss';
import City from './City';

const Cities: React.FunctionComponent = () => {
  const { city: cityParam }: { city?: string } = useParams();
  const cityId: string = cities.filter(city => city.name === cityParam)[0]?.id;

  return (
    <main className={styles.mainContainer}>
      {!cityParam ? (
        <>
          <Title title="What is the weather like in other Coherent&lsquo;s cities?" />
          <ul className={styles.list}>
            {cities.map(city => (
              <City key={city.id} city={city} />
            ))}
          </ul>
        </>
      ) : (
        <Outlet context={{ cityId: cityId }} />
      )}
    </main>
  );
};

export default Cities;
