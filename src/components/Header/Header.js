import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <img
        className={styles.img}
        src={require('../../../public/images/logo.png')}
        alt="Logo image"
      />
      <h1> Show Me The Weather </h1>
    </header>
  );
};

export default Header;
