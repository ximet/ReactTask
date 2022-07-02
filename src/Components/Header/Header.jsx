import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  return (
    <nav className={styles.navMenu}>
      <div className={styles.container}>
        <ul className={styles['nav-items']}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
