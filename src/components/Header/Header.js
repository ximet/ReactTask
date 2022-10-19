import styles from './Header.module.css';
import Navigation from '../Navigation/Navigation';

import { Link } from 'react-router-dom';

const MAIN_TITLE_LABEL = 'Show Me The Weather';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.titleContainer}>
        <Link to="/">
          <img
            className={styles.img}
            src={require('../../../public/images/logo.png')}
            alt="Logo image"
          />
        </Link>
        <h1 className={styles.mainTitle}> {MAIN_TITLE_LABEL} </h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
