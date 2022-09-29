import React, {
  FC,
  useReducer,
  ChangeEvent,
  useState,
  useCallback,
  MouseEvent,
  Reducer
} from 'react';

import commonStyle from 'styles/commonStyles.css';
import {
  feedbackReducer,
  CHANGE_FEEDBACK_STATE,
  RESET_STATE,
  FeedbackActionData
} from 'reducers/feedbackReducer';
import { FeedbackState } from 'types/feedbackType';
import styles from './Feedback.css';
import useValidate from 'hooks/useValidate';
import { sendFeedback } from 'services/localStorage';
import classNames from 'classnames';
import { RatingStar } from './RatingStar';
import { ViewFeedbacks } from './ViewFeedbacks';

export const Feedback: FC = () => {
  const [state, dispatch] = useReducer<Reducer<FeedbackState, FeedbackActionData>>(
    feedbackReducer,
    {
      name: '',
      email: '',
      feedback: '',
      phone: '',
      rating: 0
    }
  );
  const [updatedProp, setUpdatedProp] = useState<number>(0); //this prop only for rerender ViewFeedback when form sended, but not every state update

  const { isValid, validateInput } = useValidate({
    name: 'minLength,name',
    email: 'email',
    phone: 'minLength,phone'
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
    sendFeedback(state);
    setUpdatedProp(Math.random());
    resetForm();
  };

  return (
    <main className={commonStyle.container}>
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
          {!isValid.name && state.name.length ? (
            <span className={styles['validation-error']}>
              The name must include letters and numbers and be longer than 4 characters
            </span>
          ) : null}
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
          {!isValid.email && state.email.length ? (
            <span className={styles['validation-error']}>Use format: email@example.com</span>
          ) : null}
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
          {!isValid.phone && state.phone.length ? (
            <span className={styles['validation-error']}>
              The phone must include numbers and be longer than 7 characters
            </span>
          ) : null}
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
            {[5, 4, 3, 2, 1].map(value => (
              <RatingStar
                key={value}
                onChange={stateHandler}
                ratingValue={value}
                currentRating={state.rating}
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
      <ViewFeedbacks prop={updatedProp} />
    </main>
  );
};
