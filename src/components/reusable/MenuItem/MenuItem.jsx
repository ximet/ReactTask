import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from 'assets/css/styles.scss';

import Icon from 'components/reusable/icons/Icon';

function MenuItem(props){
  const { path, iconPath, name } = props;
  return (
    <Link to={path} className={styles.menuItem}>
      <Icon path={iconPath}/>
      <div className={styles.menuItemText}>{name}</div>
    </Link>
  );  
}

MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  iconPath: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default MenuItem;
