import React, { FC, useReducer, ChangeEvent, useMemo, useCallback, MouseEvent } from 'react';

import commonStyle from 'styles/commonStyles.css';
import {
  feedbackReducer,
  CHANGE_FEEDBACK_STATE,
  RESET_STATE,
  FeedbackState,
  FeedbackActionData
} from 'reducers/feedbackReducer';
import styles from './Feedback.css';
import useValidate from 'hooks/useValidate';
import { setInLocalStorage, FEEDBACK_DATA_LS_LABEL } from 'services/localStorage';
import { ValidateElementInfoType } from 'hooks/useValidate';
import { getBindedStyles } from 'helpers';

const getClasses = getBindedStyles(styles);

export const Feedback: FC = () => {
  const [state, dispatch] = useReducer<
    (state: FeedbackState, { type, payload }: FeedbackActionData) => FeedbackState
  >(feedbackReducer, {
    name: '',
    email: '',
    problems: '',
    rating: 5
  });

  const email: ValidateElementInfoType = useValidate();
  const name: ValidateElementInfoType = useValidate();

  const stateHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      target: { name, type, value }
    } = e;
    dispatch({
      type: CHANGE_FEEDBACK_STATE,
      payload: {
        name,
        data: type === 'range' ? +value : value
      }
    });
  };

  const validatedInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name: elementName, value: elementValue }
    } = e;

    let selectedInput: ValidateElementInfoType;

    if (elementName === 'name') {
      selectedInput = name;
    }
    if (elementName === 'email') {
      selectedInput = email;
    }

    selectedInput!.validateInput(elementName, elementValue);
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
    const { rating } = state;
    if (rating >= 8) return 'green';
    if (rating >= 5) return 'yellow';
    if (rating < 5) return 'red';
  }, [state.rating]);

  const sendBtnClasses = useMemo(() => getClasses('form-btn', 'send-btn'), []);
  const resetBtnClasses = useMemo(() => getClasses('form-btn', 'reset-btn'), []);

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
              onChange={validatedInputHandler}
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
              onChange={validatedInputHandler}
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
            className={sendBtnClasses}
            disabled={!email.isValid || !name.isValid}
            onClick={sendForm}
          >
            Send
          </button>
          <button type="reset" className={resetBtnClasses} onClick={resetForm}>
            Reset
          </button>
        </div>
      </form>
    </main>
  );
};
