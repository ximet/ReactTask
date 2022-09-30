import React, { FC, useReducer, ChangeEvent, useCallback, MouseEvent, Reducer } from 'react';

import {
  feedbackReducer,
  CHANGE_FEEDBACK_STATE,
  RESET_STATE,
  FeedbackActionData
} from 'reducers/feedbackReducer';
import { FeedbackState } from 'types/feedbackType';
import styles from './Feedback.css';
import useValidate from 'hooks/useValidate';
import classNames from 'classnames';
import { RatingStar } from './RatingStar';
import { getArray } from 'utils/helpers';
import { ValidationFunctions } from 'enums/validationFunctionsEnum';
import { STAR_CLASS_NAMES } from 'enums/starClassNamesEnum';

type FeedbackFromProps = {
  updateFeedbacks: (feedback: FeedbackState) => void;
};

export const FeedbackFrom: FC<FeedbackFromProps> = ({ updateFeedbacks }) => {
  const [state, dispatch] = useReducer<Reducer<FeedbackState, FeedbackActionData>>(
    feedbackReducer,
    {
      id: 0,
      name: '',
      email: '',
      feedback: '',
      phone: '',
      rating: 0
    }
  );

  const { isValid, validateInput } = useValidate({
    name: [ValidationFunctions.MIN_LENGTH, ValidationFunctions.NAME],
    email: [ValidationFunctions.EMAIL],
    phone: [ValidationFunctions.PHONE]
  });

  const stateHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      target: { name, type, value }
    } = e;
    dispatch({
      type: CHANGE_FEEDBACK_STATE,
      payload: {
        name,
        data: type === 'radio' ? +value : value
      }
    });
  };

  const validatedInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name: elementName, value: elementValue }
    } = e;

    validateInput(elementName, elementValue);
    stateHandler(e);
  };

  const resetForm = useCallback(() => {
    dispatch({ type: RESET_STATE });
  }, []);

  const sendForm = (e: MouseEvent) => {
    e.preventDefault();
    updateFeedbacks(state);
    resetForm();
  };

  return (
    <>
      <h2 className={styles['feedback-title']}>Please, send feedback</h2>
      <form className={styles['feedback-form']}>
        <div className={styles['feedback-user-data__group']}>
          <label htmlFor="feedback-name" className={styles['feedback-input-label']}>
            What is your name?
          </label>
          <input
            type="text"
            id="feedback-name"
            name="name"
            value={state.name}
            className={styles['feedback-input']}
            onChange={validatedInputHandler}
            placeholder="required field"
            required
          />
          {!isValid.name && !!state.name && (
            <span className={styles['validation-error']}>
              The name must include letters and numbers and be longer than 4 characters
            </span>
          )}
        </div>
        <div className={styles['feedback-user-data__group']}>
          <label htmlFor="feedback-email" className={styles['feedback-input-label']}>
            Enter your email
          </label>
          <input
            type="email"
            id="feedback-email"
            name="email"
            value={state.email}
            className={styles['feedback-input']}
            onChange={validatedInputHandler}
            placeholder="required field"
            required
          />
          {!isValid.email && !!state.email && (
            <span className={styles['validation-error']}>Use format: email@example.com</span>
          )}
        </div>
        <div className={styles['feedback-user-data__group']}>
          <label htmlFor="feedback-phone" className={styles['feedback-input-label']}>
            Enter your phone
          </label>
          <input
            type="tel"
            id="feedback-phone"
            name="phone"
            value={state.phone}
            className={styles['feedback-input']}
            onChange={validatedInputHandler}
            placeholder="required field"
            required
          />
          {!isValid.phone && !!state.phone && (
            <span className={styles['validation-error']}>
              The phone must include numbers and be longer than 7 characters
            </span>
          )}
        </div>

        <div className={styles['feedback-feedback-group']}>
          <label htmlFor="feedback-feedback" className={styles['feedback-input-label']}>
            Any problems or suggestions?
          </label>
          <textarea
            name="feedback"
            id="feedback-feedback"
            value={state.feedback}
            className={classNames(styles['feedback-input'], styles['feedback-textarea'])}
            onChange={stateHandler}
          ></textarea>
        </div>
        <div className={styles['feedback-rating-group']}>
          <h4>Rating</h4>
          <div className={styles['feedback-stars-group']}>
            {getArray(5)
              .reverse()
              .map(value => (
                <RatingStar
                  key={value}
                  onChange={stateHandler}
                  ratingValue={value}
                  currentRating={state.rating}
                  cssClassName={STAR_CLASS_NAMES.FORM}
                  size={30}
                />
              ))}
          </div>
        </div>

        <div className={styles['control-buttons']}>
          <button
            type="submit"
            className={classNames(styles['form-btn'], styles['send-btn'])}
            disabled={!isValid.email || !isValid.name || !isValid.phone}
            onClick={sendForm}
          >
            Send
          </button>
          <button
            type="reset"
            className={classNames(styles['form-btn'], styles['reset-btn'])}
            onClick={resetForm}
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
};
