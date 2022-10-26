import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Error from './Error';

const testIds = {
  title404: 'title-404',
  link: 'homeLink',
  button: 'button',
  layout: 'layout',
  homePage: 'homePage',
  buttonLink: 'buttonLink'
};

describe('Error tests', () => {
  test('error is rendering', async () => {
    render(<Error />, { wrapper: MemoryRouter });
    expect(screen.getByText(/404 - No page found/i)).toBeInTheDocument();
    expect(screen.getByTestId(testIds.title404)).toBeInTheDocument();
    expect(screen.getByTestId(testIds.link)).toBeInTheDocument();
    const buttonElement = screen.getByText(/Return Home/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('should be a link that have href value to "/"', () => {
    render(<Error />, { wrapper: MemoryRouter });
    const link = screen.getByTestId(testIds.link);
    expect(link.getAttribute('href')).toBe('/');
  });

  test('when button clicks, there is link to "/"', async () => {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );
    const user = userEvent.setup();
    const buttonElement = screen.getByText(/Return Home/i);
    await user.click(buttonElement);
    const link = screen.getByTestId(testIds.link);
    expect(link.getAttribute('href')).toBe('/');
  });
});
