import React from 'react';
import '@testing-library/jest-dom';
import {
  feedbackReducer,
  feedbackSelector,
  FEEDBACK_REQUEST_FAILED,
  FEEDBACK_REQUEST_START,
  FEEDBACK_REQUEST_SUCCESS
} from 'redux/feedbackReducer';
import { mockFeedbackData } from 'components/Data/mockFeedbackData';

describe('feedback reducer', () => {
  test('should return the initial state', () => {
    return expect(feedbackReducer(undefined, { action: null, type: null })).toEqual({
      feedback: [],
      loading: false,
      error: ''
    });
  });

  test('should handle FEEDBACK_REQUEST_START', () => {
    expect(
      feedbackReducer({ feedback: [], loading: false, error: '' }, { type: FEEDBACK_REQUEST_START })
    ).toEqual({ feedback: [], loading: true, error: '' });
  });

  test('should handle FEEDBACK_REQUEST_SUCCESS', () => {
    expect(
      feedbackReducer(
        { feedback: [], loading: true, error: '' },
        { type: FEEDBACK_REQUEST_SUCCESS, payload: { data: mockFeedbackData } }
      )
    ).toEqual({ feedback: mockFeedbackData, loading: false, error: '' });
  });

  test('should handle FEEDBACK_REQUEST_SUCCESS', () => {
    expect(
      feedbackReducer(
        { feedback: [], loading: true, error: '' },
        { type: FEEDBACK_REQUEST_FAILED, payload: { error: { success: false } } }
      )
    ).toEqual({ feedback: [], loading: false, error: { success: false } });
  });

  test('should handle default state', () => {
    expect(
      feedbackReducer({ feedback: [], loading: true, error: '' }, { type: undefined })
    ).toEqual({ feedback: [], loading: true, error: '' });
  });

  test('feedback Selector return correct state', () => {
    expect(feedbackSelector({ feedback: mockFeedbackData, loading: false, error: '' })).toEqual(
      mockFeedbackData
    );
  });
});
