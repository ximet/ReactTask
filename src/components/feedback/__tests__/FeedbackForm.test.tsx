import React, { ChangeEvent } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FeedbackFrom } from '../FeedbackForm';

const updateFeedbacks = jest.fn();

describe('FeedbackForm', () => {
  test('component renders', () => {
    render(<FeedbackFrom updateFeedbacks={updateFeedbacks} />);

    expect(screen.getByText(/Please, send feedback/i)).toBeInTheDocument();
  });

  test('reset form', async () => {
    render(<FeedbackFrom updateFeedbacks={updateFeedbacks} />);

    const resetBtn = screen.getByTestId('reset-btn');
    const nameInput = screen.getByTestId('name-input');

    userEvent.type(nameInput, 'MyName');

    waitFor(() => {
      expect(jest.fn()).toHaveBeenCalledTimes(6);
      expect(screen.getByDisplayValue(/myname/i)).toBeInTheDocument();
    });

    userEvent.click(resetBtn);

    waitFor(() => {
      expect(screen.getByDisplayValue(/myname/i)).not.toBeInTheDocument();
    });
  });

  test('invalid data', () => {
    render(<FeedbackFrom updateFeedbacks={updateFeedbacks} />);

    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const phoneInput = screen.getByTestId('phone-input');
    const submitBtn = screen.getByTestId('submit-btn');

    fireEvent.change(nameInput, {
      target: {
        value: '1'
      }
    });
    fireEvent.change(emailInput, {
      target: {
        value: '2'
      }
    });
    fireEvent.change(phoneInput, {
      target: {
        value: '3'
      }
    });

    waitFor(() => {
      expect(nameInput).toHaveValue('1');
      expect(emailInput).toHaveValue('2');
      expect(phoneInput).toHaveValue('3');
    });

    expect(submitBtn).toBeDisabled();
  });
});
