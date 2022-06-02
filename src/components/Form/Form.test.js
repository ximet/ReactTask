import { render, screen, fireEvent } from '@testing-library/react';
import BasicForm from './Form';
import { translations } from '../../utils/translations';

describe('Form component', () => {
  test('should render inputs and button', () => {
    render(<BasicForm />);
    expect(screen.getByText(translations.msg_user_name_label)).toBeInTheDocument();
    expect(screen.getByText(translations.msg_user_email_label)).toBeInTheDocument();
    expect(screen.getByText(translations.msg_user_review_label)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('should not submit empty form', () => {
    const onSubmit = jest.fn();
    render(<BasicForm onSubmit={onSubmit} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onSubmit).not.toHaveBeenCalled();
  });

  test('should submit filled form', () => {
    render(<BasicForm />);
    fireEvent.change(screen.getByLabelText(translations.msg_user_name_label), {
      target: { value: 'Gedas' }
    });
    fireEvent.change(screen.getByLabelText(translations.msg_user_email_label), {
      target: { value: 'gedas@gedas.lt' }
    });
    fireEvent.change(screen.getByLabelText(translations.msg_user_review_label), {
      target: { value: 'Testas' }
    });
    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText(translations.msg_success_submit)).toBeInTheDocument();
  });
});
