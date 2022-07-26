import React, { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import cities from '../../helpers/cities';
import Title from './../UI/Title/Title';
import styles from './Cities.module.scss';
import City from './City';

const Cities: React.FunctionComponent = () => {
  const { cityId } = useParams<string>();
  const [showMore, setShowMore] = useState<boolean>(false);
  const clickHandler = () => setShowMore(showMore => !showMore);
  const citiesToShow = cities.length / 2;

  return (
    <>
      {!cityId ? (
        <main className={styles.mainContainer}>
          <Title title="What is the weather like in other Coherent&lsquo;s cities?" />
          <ul className={styles.list}>
            {cities.slice(0, citiesToShow).map(city => (
              <City key={city.id} city={city} />
            ))}
          </ul>
          {showMore && (
            <ul className={styles.list}>
              {cities.slice(citiesToShow).map(city => (
                <City key={city.id} city={city} />
              ))}
            </ul>
          )}
          <button onClick={clickHandler} className={styles.button}>
            {!showMore ? 'Load more cities...' : 'Show less'}
          </button>
        </main>
      ) : null}
      <Outlet />
    </>
  );
};

export default Cities;
