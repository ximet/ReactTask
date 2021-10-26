import styles from './RatingInput.module.scss';
import Star from '../Star/Star';

function RatingInput({ onChange, number }) {
  return (
    <div className={styles.starRatingGroup} onChange={onChange}>
      {[...Array(number).keys()]
        .map(x => ++x)
        .reverse()
        .map(value => (
          <Star value={value} key={value} />
        ))}
    </div>
  );
}

export default RatingInput;
