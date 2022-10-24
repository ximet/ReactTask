import Input from 'components/Input/Input';
import React, { ChangeEvent, FC, useReducer, Reducer } from 'react';
import { useDispatch } from 'react-redux';
import feedbackInputsReducer, {
  ActionData,
  UPDATE_INPUT_VALUES,
  FEEDBACK_FORM_RESET
} from 'reducers/feedbackInputsReducer';
import { Feedback } from 'types';
import InputRating from 'components/InputRating/InputRating';
import { addFeedback } from 'redux/actions';
import Button, { ButtonStyles } from 'components/Button/Button';
import styles from './FeedbackForm.module.scss';

const FeedbackForm: FC = () => {
  const dispatchRedux = useDispatch();
  const [state, dispatch] = useReducer<Reducer<Feedback, ActionData>>(feedbackInputsReducer, {
    id: '',
    nickname: '',
    nicknameError: '',
    email: '',
    emailError: '',
    reviewTitle: '',
    reviewTitleError: '',
    review: '',
    reviewError: '',
    rating: 0,
    ratingError: ''
  });
  const {
    nickname,
    email,
    reviewTitle,
    review,
    rating,
    nicknameError,
    emailError,
    reviewTitleError,
    reviewError,
    ratingError
  } = state;

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    dispatch({
      type: UPDATE_INPUT_VALUES,
      payload: { name, data: name === 'rating' ? +value : value }
    });
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement | HTMLTextAreaElement | HTMLButtonElement>
  ) => {
    event.preventDefault();
    const inputStates = { rating, nickname, email, reviewTitle, review };
    const inputStatesKeys = Object.keys(inputStates);
    inputStatesKeys.forEach((stateItem: string) => {
      dispatch({
        type: UPDATE_INPUT_VALUES,
        payload: { name: stateItem, data: inputStates[stateItem] }
      });
    });
    if (
      nickname &&
      email &&
      reviewTitle &&
      review &&
      rating &&
      !ratingError &&
      !nicknameError &&
      !emailError &&
      !reviewTitleError &&
      !reviewError
    ) {
      dispatchRedux(addFeedback(state));
      dispatch({ type: FEEDBACK_FORM_RESET });
    }
  };

  return (
    <form>
      <InputRating type="radio" name="rating" id="num" value={rating} onChange={handleChange} />
      <div className={styles.error}>{ratingError || ''}</div>
      <Input type="text" name="nickname" id="nameInput" value={nickname} onChange={handleChange} />
      <div className={styles.error}>{nicknameError || ''}</div>
      <Input type="email" name="email" id="emailInput" value={email} onChange={handleChange} />
      <div className={styles.error}>{emailError || ''}</div>
      <Input
        type="text"
        name="reviewTitle"
        id="title"
        value={reviewTitle}
        onChange={handleChange}
      />
      <div className={styles.error}>{reviewTitleError || ''}</div>
      <Input type="textarea" name="review" id="review" value={review} onChange={handleChange} />
      <div className={styles.error}>{reviewError || ''}</div>
      <Button type="submit" className={ButtonStyles.FormBtn} onClick={handleSubmit}>
        Submit Review
      </Button>
    </form>
  );
};

export default FeedbackForm;
