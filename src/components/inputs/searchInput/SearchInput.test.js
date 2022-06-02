import { fireEvent, render, screen } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('When user enter some text in the SearchInput', () => {
  test('should display the text in the SearchInput', () => {
    render(<SearchInput />);
    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'Test' } });
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
});
