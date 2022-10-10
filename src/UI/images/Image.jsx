import React from 'react';
import styles from '../../styles.scss';
import PropTypes from 'prop-types';

function Image({ image, alt, ...props }) {
  return (
    <div className={styles.images}>
      <img src={image} alt={alt} {...props} />
    </div>
  );
}

Image.propTypes = {
  image: PropTypes.string
};
export default Image;
