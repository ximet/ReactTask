import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { ThemeSwitch } from '../../Components';
import logo from '../../Assets/img/Cloud9-x1000.png';

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
            <Link to="/favourites">Locations</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
          <img src={logo} width="90" height="90" alt="Cloud9 logo" />
        </ul>
      </div>
    </nav>
  );
}

export default Header;
