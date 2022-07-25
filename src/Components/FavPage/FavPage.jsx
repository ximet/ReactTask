import { useSelector, useDispatch } from 'react-redux';
import { FavCitiesList, Message } from '../';

import styles from './FavPage.module.scss';

function FavPage() {
  const favCityList = useSelector((state) => state);

  const listItems = favCityList.map((item) => {
    return <FavCitiesList data={item} key={item.locationData.id} />;
  });

  function renderComponent() {
    if (listItems.length !== 0) {
      return (
        <main className={styles.container}>
          <h2 className={styles.title}>Favourite Locations</h2>
          <div className={styles['container-items']}>{listItems}</div>
        </main>
      );
    } else {
      return (
        <Message
          message1={'Here you can see a list of the weather from your favourite cities.'}
          message2={'Your list is empty. Search for a city and add it as a favourite!'}
        />
      );
    }
  }

  return renderComponent();
}

export default FavPage;
