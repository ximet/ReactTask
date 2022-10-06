import React from 'react';
import styles from '../../styles.scss';
import PropTypes from 'prop-types';

function Image({ image, alt }) {
  return (
    <div className={styles.images}>
      <img alt={alt} src={image}></img>
    </div>
  );
}

Image.propTypes = {
  image: PropTypes.string
};
export default Image;
