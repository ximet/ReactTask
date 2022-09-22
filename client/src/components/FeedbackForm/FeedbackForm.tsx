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
import { BsStar } from 'react-icons/bs';

const FeedbackForm: FC = () => {
  const { addFeedback } = useContext(FeedbackContext);
  const [state, dispatch] = useReducer<Reducer<Feedback, ActionData>>(feedbackReducer, {
    id: '',
    nickname: '',
    email: '',
    reviewTitle: '',
    review: '',
    rating: 0
  });
  const { nickname, email, reviewTitle, review, rating } = state;

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    dispatch({ type: UPDATE_INPUT_VALUES, payload: { name, data: value } });
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
      <ul className="rating">
        {Array.from({ length: 5 }, (_, i) => {
          const ratingNumber = i + 1;
          return (
            <li key={`rating-${ratingNumber}`}>
              <Input
                type="radio"
                name="rating"
                id={`num${ratingNumber}`}
                value={rating + ratingNumber}
                onChange={handleChange}
                label={<BsStar />}
                checked={rating === ratingNumber}
              />
            </li>
          );
        })}
      </ul>
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
