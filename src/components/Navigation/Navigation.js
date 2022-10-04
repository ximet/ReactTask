import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

import { HOME_LABEL, ABOUT_LABEL } from '../constants';

const Navigation = () => {
  const checkIsActive = ({ isActive }) => (isActive ? { textDecoration: 'underline' } : undefined);

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
