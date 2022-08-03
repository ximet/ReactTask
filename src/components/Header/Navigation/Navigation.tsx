import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header.module.scss';
interface NavigationProps {
  classname: string;
  setShowMobileNav?: React.Dispatch<React.SetStateAction<boolean>>;
  testid: string;
}
const paths = ['cities', 'about', 'contacts'];
const Navigation: React.FunctionComponent<NavigationProps> = ({
  classname,
  setShowMobileNav,
  testid
}) => {
  const linkClickHandler = (): void => {
    setShowMobileNav && setShowMobileNav(false);
  };
  return (
    <nav className={classname} data-testid={testid}>
      <ul className={styles.linkContainer}>
        <li className={styles.link} onClick={linkClickHandler}>
          <NavLink to="/">Home</NavLink>
        </li>
        {paths.map(path => (
          <li className={styles.link} onClick={linkClickHandler} key={path}>
            <NavLink
              to={`/${path}`}
              className={({ isActive }) => (isActive ? styles.active : undefined)}
            >
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
