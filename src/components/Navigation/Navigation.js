import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const HOME_LABEL = 'Home';
const ABOUT_LABEL = 'About';

const Navigation = () => {
  const checkIsActive = ({ isActive }) => (isActive ? { textDecoration: 'underline' } : {});

  return (
    <nav>
      <ul className={styles.navigation}>
        <li>
          <NavLink to="/" end style={checkIsActive}>
            {HOME_LABEL}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={checkIsActive}>
            {ABOUT_LABEL}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
