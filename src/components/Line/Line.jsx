import React from 'react';
import styles from './Line.module.scss';

function Line({ type, theme }) {
  return <span className={[styles.verticalLine, styles[type], styles[theme]].join(' ')}></span>;
}

export default Line;
