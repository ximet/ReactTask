import styles from './Header.module.css';
import { MAIN_TITLE_LABEL } from '../constants';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <img
        className={styles.img}
        src={require('../../../public/images/logo.png')}
        alt="Logo image"
      />
      <h1> {MAIN_TITLE_LABEL} </h1>
    </header>
  );
};

export default Header;
