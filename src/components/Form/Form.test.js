import { render, screen } from '@testing-library/react';
import Form from './Form';
import { translations } from '../../utils/translations';
import '@testing-library/jest-dom/extend-expect';

describe('Form component', () => {
  test('render inputs and button', () => {
    render(<Form />);
    const inputName = screen.getByText(translations.msg_user_name_label);
    const inputEmail = screen.getByText(translations.msg_user_email_label);
    const textareaFeedback = screen.getByText(translations.msg_user_review_label);
    const submitButton = screen.getByRole('button');

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(textareaFeedback).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
