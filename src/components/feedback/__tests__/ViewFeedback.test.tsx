import { render, screen } from '@testing-library/react';
import { fakeFeedbacks } from 'mocks/fakeData';
import React from 'react';
import { ViewFeedbacks } from '../ViewFeedbacks';

describe('ViewFeedback component', () => {
  test('ViewFeedback renders data', () => {
    render(<ViewFeedbacks feedbacks={fakeFeedbacks} />);
    expect(screen.getByText(/Kolya/i)).toBeInTheDocument();
    expect(screen.getByText(/gooood/i)).toBeInTheDocument();
  });
});
