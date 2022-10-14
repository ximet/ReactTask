import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sumbitFeedback } from '../../redux/feedbackReducer';
import { useNavigate } from 'react-router-dom';

import styles from './Feedback.module.css';
import { SUMBIT_LABEL } from '../../components/constants';

import {
  title,
  titleSecondary,
  question1,
  question2,
  question3,
  question4,
  feedbackCountMessage,
  alertMessage
} from './feedbackQuestions';

const Feedback = () => {
  const [answer3, setAnswer3] = React.useState('');
  const [answer4, setAnswer4] = React.useState('');

  const { feedback } = useSelector(state => state.feedback);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAnswer3 = e => setAnswer3(e.target.value);
  const handleAnswer4 = e => setAnswer4(e.target.value);

  const submitHandler = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const answer1 = formData.get('question1');
    const answer2 = formData.get('question2');
    const answer3 = formData.get('question3');
    const answer4 = formData.get('question4');

    const feedbackComments = {
      [question1.question]: answer1,
      [question2.question]: answer2,
      [question3]: answer3,
      [question4]: answer4,
      id: Date.now()
    };

    dispatch(sumbitFeedback(feedbackComments));
    setTimeout(() => {
      alert(alertMessage);
      navigate('/');
    }, 500);
  };

  return (
    <form id="form" onSubmit={submitHandler}>
      <h2>{title}</h2>
      <h2 className={styles.titleSecondary}>{titleSecondary}</h2>

      <div className={styles.formControl}>
        <label htmlFor="qustion1" id="qustion1">
          {question1.question}
        </label>

        <select name="question1" id="question1">
          <option value="-"> </option>
          <option value={question1.option1}>{question1.option1}</option>
          <option value={question1.option2}>{question1.option2}</option>
          <option value={question1.option3}>{question1.option3}</option>
          <option value={question1.option4}>{question1.option4}</option>
        </select>
      </div>

      <div className={styles.formControl}>
        <label htmlFor="question2" id="question2">
          {question2.question}
        </label>

        <select name="question2" id="question2">
          <option value="-"> </option>
          <option value={question2.option1}>{question2.option1}</option>
          <option value={question2.option2}>{question2.option2}</option>
          <option value={question2.option3}>{question2.option3}</option>
          <option value={question2.option4}>{question2.option4}</option>
          <option value={question2.option5}>{question2.option5}</option>
        </select>
      </div>

      <div className={styles.formControl}>
        <label htmlFor="question3" id="question3">
          {question3}
        </label>

        <input
          name="question3"
          id="comment"
          placeholder="Enter your comment here"
          onChange={handleAnswer3}
          value={answer3}
        />
      </div>

      <div className={styles.formControl}>
        <label htmlFor="question4">{question4}</label>
        <input
          name="question4"
          id="question4"
          placeholder="Enter your comment here"
          onChange={handleAnswer4}
          value={answer4}
        />
      </div>

      <button type="submit" value="submit">
        {SUMBIT_LABEL}
      </button>
      <div className={styles.feedbackCount}>
        {feedbackCountMessage} {feedback.length}.
      </div>
    </form>
  );
};

export default Feedback;
