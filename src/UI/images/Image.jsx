import React from 'react';
import styles from '../../styles.scss';

export default function Image({ image }) {
  return (
    <div className={styles.images}>
      <img src={image}></img>
    </div>
  );
}
