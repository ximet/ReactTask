import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { FavCitiesList, Message } from '../';
import { ThemeContext } from '../../context/themeContext';

import styles from './FavPage.module.scss';

function FavPage() {
  const { theme } = useContext(ThemeContext);
  const locations = useSelector((state) => state);

  const listItems = locations.map((item) => {
    return <FavCitiesList data={item} key={item.locationData.id} />;
  });

  return (
    <main className={styles.wrapper}>
      {listItems.length !== 0 ? (
        <div className={styles[`${theme}-theme`]}>
          <h2 className={styles.title}>Saved Locations</h2>
          <div className={styles['container-items']}>{listItems}</div>
        </div>
      ) : (
        <div className={styles[`${theme}-theme`]}>
          <Message>
            <p>Here you can see a list of the weather from your favourite cities.</p>
            <br />
            <br />
            <p>Your list is empty. Search for a city and add it as a favourite!</p>
          </Message>
        </div>
      )}
    </main>
  );
}

export default FavPage;
