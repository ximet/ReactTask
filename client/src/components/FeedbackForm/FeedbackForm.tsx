import Button from 'components/Button';
import Input from 'components/Input/Input';
import FeedbackContext from 'contexts/FeedbackContext';
import React, { ChangeEvent, FC, useContext, useReducer, Reducer } from 'react';
import feedbackReducer, {
  ActionData,
  UPDATE_INPUT_VALUES,
  FEEDBACK_FORM_RESET
} from 'reducers/feedbackReducer';
import { Feedback } from 'types';
import InputRating from 'components/InputRating/InputRating';

const FeedbackForm: FC = () => {
  const { addFeedback } = useContext(FeedbackContext);
  const [state, dispatch] = useReducer<Reducer<Feedback, ActionData>>(feedbackReducer, {
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
  const { nickname, email, reviewTitle, review, rating } = state;

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
    addFeedback(state);
    dispatch({ type: FEEDBACK_FORM_RESET });
  };

  return (
    <form>
      <InputRating type="radio" name="rating" id="num" value={rating} onChange={handleChange} />
      <Input type="text" name="nickname" id="nameInput" value={nickname} onChange={handleChange} />
      <Input type="email" name="email" id="emailInput" value={email} onChange={handleChange} />
      <Input
        type="text"
        name="reviewTitle"
        id="title"
        value={reviewTitle}
        onChange={handleChange}
      />
      <Input type="textarea" name="review" id="review" value={review} onChange={handleChange} />
      <Button type="submit" className="FormBtn" onClick={handleSubmit}>
        Submit Review
      </Button>
    </form>
  );
};

export default FeedbackForm;
