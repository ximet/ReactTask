import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import About from './About';

test('\'ABOUT US\' title should be visible on the screen.', () => {
  render(<About />);

  const title = screen.getByText('ABOUT US');
  expect(title).toBeInTheDocument();
});
