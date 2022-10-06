import React from 'react';
import styles from '../../styles.scss';
import PropTypes from 'prop-types';

function Image({ image, ...props }) {
  return (
    <div className={styles.images}>
      <img src={image} {...props}></img>
    </div>
  );
}

Image.propTypes = {
  image: PropTypes.string
};
export default Image;
