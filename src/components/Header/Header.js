import styles from './Header.module.css';

function Header() {
  return (
    <h1 className={styles.headerContainer}>
      <img className={styles.img} src={require('../../../public/images/logo.png')} alt="Logo image" />
      <span> Show Me The Weather </span>
    </h1>
  );
}

export default Header;
