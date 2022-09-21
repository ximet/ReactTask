import Button from 'components/Button';
import Input from 'components/Input/Input';
import FeedbackContext from 'contexts/FeedbackContext';
import React, { ChangeEvent, FC, useContext, useReducer, Reducer } from 'react';
import feedbackReducer, {
  ActionData,
  CREATE_FEEDBACK_SUCCESS,
  FEEDBACK_FORM_RESET
} from 'reducers/feedbackReducer';
import { Feedback } from 'types';
import { BsStar } from 'react-icons/bs';

const FeedbackForm: FC = () => {
  const { feedback, setFeedback, addFeedback } = useContext(FeedbackContext);
  const [state, dispatch] = useReducer<Reducer<Feedback, ActionData>>(feedbackReducer, {
    id: '',
    nickname: '',
    email: '',
    title: '',
    review: '',
    rating: 0
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    dispatch({ type: CREATE_FEEDBACK_SUCCESS, payload: { name, data: value } });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    setFeedback([state, ...feedback]);
    addFeedback(state);
    dispatch({ type: FEEDBACK_FORM_RESET });
  };

  return (
    <form>
      <ul className="rating">
        {Array.from({ length: 5 }, (_, i) => {
          return (
            <li key={`rating-${i + 1}`}>
              <Input
                type="radio"
                name="rating"
                id={`num${i + 1}`}
                value={state.rating + i + 1}
                onChange={handleChange}
                label={<BsStar />}
                checked={state.rating === i + 1}
              />
            </li>
          );
        })}
      </ul>
      <Input
        type="text"
        name="nickname"
        id="nameInput"
        value={state.nickname}
        onChange={handleChange}
        label="* Name"
      />
      <Input
        type="email"
        name="email"
        id="emailInput"
        value={state.email}
        onChange={handleChange}
        label="* Email"
      />
      <Input
        type="text"
        name="title"
        id="titleInput"
        value={state.title}
        onChange={handleChange}
        label="* Review Title"
      />
      <Input
        type="textarea"
        name="review"
        id="reviewInput"
        value={state.review}
        onChange={handleChange}
        label="* Your Review"
      />
      <Button type="submit" className="FormBtn" onClick={handleSubmit}>
        Submit Review
      </Button>
    </form>
  );
};

export default FeedbackForm;
