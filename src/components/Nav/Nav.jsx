import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Nav.scss';

const Nav = ({ links }) => (
  <nav>
    { links && links.map((item) => (
      <Link
        key={item.id}
        to={item.path}
        className={styles.navItem}
      >
        <div className={styles.navItemImg}>
          <img src={item.icon} alt={item.title} />
        </div>
        <div className={styles.navItemTitle}>
          {item.title}
        </div>
      </Link>
    ))}
  </nav>
);

Nav.propTypes = {
  links: PropTypes.shape({
    id: PropTypes.number,
    icon: PropTypes.string,
    title: PropTypes.string,
  }).obj.isRequired,
};

export default Nav;
