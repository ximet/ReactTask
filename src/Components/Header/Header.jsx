import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { ThemeSwitch } from '../../Components';

import styles from './Header.module.scss';

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={styles[`${theme}-theme`]}>
      <div className={styles.container}>
        <ul className={styles['nav-items']}>
          <ThemeSwitch />
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
