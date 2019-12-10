import React from 'react';
import PropTypes from 'prop-types';
import styles from 'assets/css/styles.scss';

const Icon = props => {
  const { path } = props;
  return path ?
    <div className={`${styles.icon}`}>
      <img className={styles.iconImg} src={`/${path}`} alt="svg"/>
    </div>
    : '';
  }

Icon.propTypes = {
  path: PropTypes.string,
};

export default Icon;
