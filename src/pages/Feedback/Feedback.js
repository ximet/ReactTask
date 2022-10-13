import styles from './Feedback.module.css';

import {
  title,
  titleSecondary,
  question1,
  question2,
  question3,
  question4,
  question5
} from './feedbackQuestions';

const Feedback = () => {
  return (
    <form id="form">
      <h2>{title}</h2>
      <h2 className={styles.titleSecondary}>{titleSecondary}</h2>

      <div className={styles.formControl}>
        <label htmlFor="qustion1" id="qustion1">
          {question1}
        </label>

        <select name="question1" id="question1">
          <option value="-"> </option>
          <option value="oncePerMonth">Once per month</option>
          <option value="oncePerWeek">Once or twice per week</option>
          <option value="everyday">Everyday</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className={styles.formControl}>
        <label htmlFor="question2" id="question2">
          {question2}
        </label>

        <select name="question2" id="question2">
          <option value="-"> </option>
          <option value="1">1 - don't like it at all.</option>
          <option value="2">2 - it could be better.</option>
          <option value="3">3 - can't decide.</option>
          <option value="4">4 - like it.</option>
          <option value="5">5 - like it very much.</option>
        </select>
      </div>

      <div className={styles.formControl}>
        <label htmlFor="question3" id="question3">
          {question3}
        </label>

        <select name="question3" id="question3">
          <option value="-"> </option>
          <option value="1">1 - very slow.</option>
          <option value="2">2 - slow</option>
          <option value="3">3 - can't decide</option>
          <option value="4">4 - it's ok.</option>
          <option value="5">5 - it works fast.</option>
        </select>
      </div>

      <div className={styles.formControl}>
        <label htmlFor="question3" id="question4">
          {question4}
        </label>

        <textarea name="comment" id="comment" placeholder="Enter your comment here"></textarea>
      </div>

      <div className={styles.formControl}>
        <label htmlFor="question5">{question5}</label>

        <textarea name="question5" id="cquestion5" placeholder="Enter your comment here"></textarea>
      </div>

      <button type="submit" value="submit">
        Submit
      </button>
    </form>
  );
};

export default Feedback;
