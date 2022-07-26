import { useSelector, useDispatch } from 'react-redux';
import { FavCitiesList, Message } from '../';

import styles from './FavPage.module.scss';

function FavPage() {
  const favCityList = useSelector((state) => state);

  const listItems = favCityList.map((item) => {
    return <FavCitiesList data={item} key={item.locationData.id} />;
  });

  return (
    <main className={styles.container}>
      {listItems.length !== 0 ? (
        <>
          <h2 className={styles.title}>Favourite Locations</h2>
          <div className={styles['container-items']}>{listItems}</div>
        </>
      ) : (
        <>
          <Message>
            <p>Here you can see a list of the weather from your favourite cities.</p>
            <br />
            <br />
            <p>Your list is empty. Search for a city and add it as a favourite!</p>
          </Message>
        </>
      )}
    </main>
  );
}

export default FavPage;
