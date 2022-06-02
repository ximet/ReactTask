import { fireEvent, render, screen } from '@testing-library/react';
import TextArea from './TextArea';

describe('When user enter some text in the textarea', () => {
  test('should display the text in the textarea', () => {
    render(<TextArea />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Test' } });
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('should display an error', () => {
    render(<TextArea isError={true} errorMessage={'Error message'} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '' } });
    fireEvent.blur(screen.getByRole('textbox'));
    expect(screen.getByText(/Error message/)).toBeInTheDocument();
  });
});
