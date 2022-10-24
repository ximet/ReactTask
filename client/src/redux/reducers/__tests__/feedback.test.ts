import { Feedback } from 'types';
import feedbackReducer, { initialState, FeedbackState } from '../feedback';
import { ActionType } from '../../actionTypes/feedback';

const mockFeedback: Feedback = {
  name: 'John',
  rating: 5,
  reason: 'Some reason',
  suggestion: '',
  recommendation: 'Yes',
  more: '',
  timestamp: new Date()
};

describe('feedbackReducer', () => {
  const updatedState: FeedbackState = {
    ...initialState,
    loading: false,
    data: [...initialState.data, mockFeedback]
  };

  it('should add feedback to the feedback list', () => {
    expect(
      feedbackReducer(initialState, {
        type: ActionType.ADD_FEEDBACK_SUCCESS,
        payload: mockFeedback
      })
    ).toEqual(updatedState);
  });
});
