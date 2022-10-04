import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = () => {
  const checkIsActive = ({ isActive }) => (isActive ? { textDecoration: 'underline' } : undefined);

  return (
    <nav>
      <ul className={styles.navigation}>
        <li>
          <NavLink to="/" end style={checkIsActive}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={checkIsActive}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
