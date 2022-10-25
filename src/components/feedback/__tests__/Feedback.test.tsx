import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Feedback } from '../Feedback';

describe('Feedback component', () => {
  jest.spyOn(Storage.prototype, 'setItem');

  test('Component renders', () => {
    render(<Feedback />);

    expect(screen.getByText(/Please, send feedback/i)).toBeInTheDocument();
  });

  test('Children render', () => {
    render(<Feedback />);

    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  test('SetItem calls', () => {
    render(<Feedback />);

    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const phoneInput = screen.getByTestId('phone-input');
    const submitBtn = screen.getByTestId('submit-btn');

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

    fireEvent.click(submitBtn);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});
