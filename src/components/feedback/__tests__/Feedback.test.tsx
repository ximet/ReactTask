import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

import { Feedback } from '../Feedback';

const updateFeedbacks = jest.fn();

describe('Feedback component', () => {
  test('Component renders', () => {
    render(<Feedback />);

    expect(screen.getByText(/Please, send feedback/i)).toBeInTheDocument();
  });

  test('Children render', () => {
    render(<Feedback />);

    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  test('state updates and send form', () => {
    render(<Feedback />);

    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const phoneInput = screen.getByTestId('phone-input');
    const submitBtn = screen.getByTestId('submit-btn');

    userEvent.type(nameInput, 'MyName');

    waitFor(() => {
      expect(updateFeedbacks).toHaveBeenCalledTimes(6);
    });
    waitFor(() => {
      expect(nameInput).toHaveValue('MyName');
    });

    fireEvent.change(nameInput, {
      target: {
        value: 'Andrew'
      }
    });
    fireEvent.change(emailInput, {
      target: {
        value: 'Andrew@test.com'
      }
    });
    fireEvent.change(phoneInput, {
      target: {
        value: '+375291112233'
      }
    });

    waitFor(() => {
      expect(nameInput).toHaveValue('Andrew');
      expect(emailInput).toHaveValue('Andrew@test.com');
      expect(phoneInput).toHaveValue('+375291112233');
    });

    expect(submitBtn).not.toBeDisabled();

    fireEvent.click(submitBtn);

    waitFor(() => {
      expect(nameInput).toHaveValue('');
      expect(emailInput).toHaveValue('');
      expect(phoneInput).toHaveValue('');
    });
  });
});
