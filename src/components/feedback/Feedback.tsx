import React, { FC, useReducer, ChangeEvent, useMemo, useCallback, MouseEvent } from 'react';

import commonStyle from '../../styles/commonStyles.css';
import {
  feedbackReducer,
  CHANGE_FEEDBACK_STATE,
  RESET_STATE
} from '../../reducers/feedbackReducer';
import styles from './Feedback.css';
import useValidate from 'hooks/useValidate';
import { setInLocalStorage, FEEDBACK_DATA_LS_LABEL } from 'services/localStorage';

export const Feedback: FC = () => {
  const [state, dispatch] = useReducer(feedbackReducer, {
    name: '',
    email: '',
    problems: '',
    rating: 5
  });

  const email = useValidate();
  const name = useValidate();

  const stateHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({
      type: CHANGE_FEEDBACK_STATE,
      payload: {
        name: e.target.name,
        data: e.target.type === 'range' ? +e.target.value : e.target.value
      }
    });
  };

  const requiredInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'name') {
      name.validateInput(e.target, e.target.value);
    }
    if (e.target.name === 'email') {
      email.validateInput(e.target, e.target.value);
    }
    stateHandler(e);
  };

  const resetForm = useCallback(() => {
    dispatch({ type: RESET_STATE });
  }, []);

  const sendForm = (e: MouseEvent) => {
    e.preventDefault();
    setInLocalStorage(state, FEEDBACK_DATA_LS_LABEL);
    resetForm();
  };

  const ratingColor = useMemo(() => {
    if (state.rating >= 8) return 'green';
    if (state.rating >= 5) return 'yellow';
    if (state.rating < 5) return 'red';
  }, [state.rating]);

  return (
    <main className={commonStyle.container}>
      <h2 className={styles['feedback-title']}>Please, send feedback</h2>
      <form className={styles['feedback-form']}>
        <div className={styles['feedback-required-data']}>
          <div className={styles['feedback-required-data__group']}>
            <label htmlFor="feedback-name" className={styles['feedback-input-label']}>
              What is your name?
            </label>
            <input
              type="text"
              id="feedback-name"
              name="name"
              value={state.name}
              className={styles['feedback-input-text']}
              onChange={requiredInputHandler}
              required
            />
            {!name.isValid && state.name.length ? (
              <span className={styles['validation-error']}>Incorrect name</span>
            ) : null}
          </div>
          <div className={styles['feedback-required-data__group']}>
            <label htmlFor="feedback-email" className={styles['feedback-input-label']}>
              Enter your email
            </label>
            <input
              type="email"
              id="feedback-email"
              name="email"
              value={state.email}
              className={styles['feedback-input-text']}
              onChange={requiredInputHandler}
              required
            />
            {!email.isValid && state.email.length ? (
              <span className={styles['validation-error']}>Incorrect email</span>
            ) : null}
          </div>
        </div>

        <div className={styles['feedback-problems-group']}>
          <label htmlFor="feedback-problems">Any problems or suggestions?</label>
          <textarea
            name="problems"
            id="feedback-problems"
            value={state.problems}
            className={styles['feedback-input-text']}
            onChange={stateHandler}
          ></textarea>
        </div>
        <div className={styles['feedback-rating-group']}>
          <label htmlFor="feedback-rating">Rate the service</label>
          <input
            type="range"
            name="rating"
            id="feedback-rating"
            min={1}
            max={10}
            step={1}
            value={state.rating}
            className={styles['feedback-rating-input']}
            onChange={stateHandler}
          />
          <span
            style={{
              color: `${ratingColor}`
            }}
          >
            {state.rating}
          </span>
        </div>
        <div className={styles['control-buttons']}>
          <button
            type="submit"
            className={`${styles['form-btn']} ${styles['send-btn']}`}
            disabled={!email.isValid || !name.isValid}
            onClick={sendForm}
          >
            Send
          </button>
          <button
            type="reset"
            className={`${styles['form-btn']} ${styles['reset-btn']}`}
            onClick={resetForm}
          >
            Reset
          </button>
        </div>
      </form>
    </main>
  );
};
