import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

describe('When user enter some text in the input', () => {
  test('should display the text in the input', () => {
    render(<Input />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Test' } });
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('should display an error', () => {
    render(<Input isError={true} errorMessage={'Error message'} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '' } });
    fireEvent.blur(screen.getByRole('textbox'));
    screen.debug();
    expect(screen.getByText(/Error message/)).toBeInTheDocument();
  });
});
