import styles from './Header.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <a href="#" className={styles.listItem}>
              Countries
            </a>
          </li>
          <li>
            <a href="#" className={styles.listItem}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={styles.listItem}>
              Details
            </a>
          </li>
          <li>
            <a href="#" className={styles.listItem}>
              Feedback
            </a>
          </li>
        </ul>
      </nav>
      <button className={styles.themeBtn}>Toggle theme</button>
    </header>
  );
}

export default Header;
