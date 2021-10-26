import PropTypes from 'prop-types';

import styles from './RatingInput.module.scss';
import { NUMBER_OF_STARS } from '../../constants/form';
import Star from '../Star/Star';

function RatingInput({ onChange }) {
  return (
    <div className={styles.starRatingGroup} onChange={onChange}>
      {[...Array(NUMBER_OF_STARS).keys()]
        .map(x => ++x)
        .reverse()
        .map(value => (
          <Star value={value} key={value} />
        ))}
    </div>
  );
}

RatingInput.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default RatingInput;
