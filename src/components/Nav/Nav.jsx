import React from 'react';
import PropTypes from 'prop-types';
import styles from './Nav.scss';

const Nav = ({ links }) => (
  <nav>
    { links && links.map((item) => (
      <div
        key={item.id}
        className={styles.navItem}>
        <div className={styles.navItemImg}>
          <img src={item.icon} alt={item.title} />
        </div>
        <div className={styles.navItemTitle}>
          {item.title}
        </div>
      </div>
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
