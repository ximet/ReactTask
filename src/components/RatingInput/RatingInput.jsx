import PropTypes from 'prop-types';

import styles from './RatingInput.module.scss';

function RatingInput({ onChange, maxRating, value }) {
  return (
    <div className={styles.rating}>
      {[...new Array(maxRating)].map((_, index) => (
        <span
          className={[styles.star, value >= index + 1 ? styles.checked : ''].join(' ')}
          key={index}
          onClick={() => onChange(index + 1)}
        ></span>
      ))}
    </div>
  );
}

RatingInput.defaultProps = {
  value: 0
};

RatingInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  maxRating: PropTypes.number.isRequired,
  value: PropTypes.number
};

export default RatingInput;
