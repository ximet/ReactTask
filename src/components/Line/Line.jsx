import React from 'react';
import PropTypes from 'prop-types';

import styles from './Line.module.scss';

function Line({ type, theme }) {
  return <span className={[styles.verticalLine, styles[type], styles[theme]].join(' ')}></span>;
}

Line.propTypes = {
  type: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
};

export default Line;
