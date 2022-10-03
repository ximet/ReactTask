import styles from './Header.module.css';
import Navigation from '../Navigation/Navigation';
import { MAIN_TITLE_LABEL } from '../constants';


const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.titleContainer}>
      <img
        className={styles.img}
        src={require('../../../public/images/logo.png')}
        alt="Logo image"
      />
      <h1> {MAIN_TITLE_LABEL} </h1>
      </div>
      <Navigation />   
    </header>
  );
};

export default Header;
