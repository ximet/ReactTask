import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import cities from '../../helpers/cities';
import Title from './../UI/Title/Title';
import styles from './Cities.module.scss';
import City from './City';

const Cities: React.FunctionComponent = () => {
  const { cityId } = useParams<string>();

  return (
    <>
      {!cityId ? (
        <main className={styles.mainContainer}>
          <Title title="What is the weather like in other Coherent&lsquo;s cities?" />
          <ul className={styles.list}>
            {cities.map(city => (
              <City key={city.id} city={city} />
            ))}
          </ul>
        </main>
      ) : null}
      <Outlet />
    </>
  );
};

export default Cities;
