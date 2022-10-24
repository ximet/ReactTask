import React from 'react';
import { fireEvent, render, screen } from 'tests/utilities';

import Button from './Button';
import * as S from './Button.styles';

describe('Button', () => {
  it('should render without crashing when no props provided', () => {
    render(<Button />);
  });

  it('should call onClick prop when clicked', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    fireEvent.click(screen.getByText(/click me/i));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render white background when "white" is passed as color prop', () => {
    render(<S.Button color="white" />);
    expect(screen.getByRole('button')).toHaveStyle(`background: #ffffff`);
  });
});
