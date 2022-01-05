import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Testing Button Component', () => {
  it('should render', () => {
    const { getByTestId } = render(<Button className="button" />);
    const button = getByTestId('test-button');
    expect(button).toBeTruthy();
  });
});
