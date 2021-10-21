import styles from './RatingInput.module.scss';

function RatingInput({ onChange }) {
  return (
    <div className={styles.starRatingGroup} onChange={onChange}>
      <input type="radio" id="rating-5" name="rating" value="5" />
      <label htmlFor="rating-5"></label>
      <input type="radio" id="rating-4" name="rating" value="4" />
      <label htmlFor="rating-4"></label>
      <input type="radio" id="rating-3" name="rating" value="3" />
      <label htmlFor="rating-3"></label>
      <input type="radio" id="rating-2" name="rating" value="2" />
      <label htmlFor="rating-2"></label>
      <input type="radio" id="rating-1" name="rating" value="1" />
      <label htmlFor="rating-1"></label>
    </div>
  );
}

export default RatingInput;
