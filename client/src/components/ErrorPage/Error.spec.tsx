import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route } from 'react-router-dom';
import Button, { ButtonStyles } from 'components/Button/Button';
import Routes from 'components/Routes';
import Main from 'pages/Main';
import SecondaryPagesLayout from 'components/layouts/SecondaryPagesLayout';
import Error from './Error';

const testIds = {
  title404: 'title-404',
  button: 'button',
  layout: 'layout'
};

describe('Error tests', () => {
  test('error is rendering', async () => {
    <MemoryRouter>{render(<Error />, { wrapper: BrowserRouter })}</MemoryRouter>;
    expect(screen.getByText(/404 - No page found/i)).toBeInTheDocument();
    expect(screen.getByTestId(testIds.title404)).toBeInTheDocument();
  });

  test('button is rendering', async () => {
    render(<Button type="button" children="Return Home" className={ButtonStyles.ErrorBtn} />);
    expect(screen.getByTestId(testIds.button)).toBeInTheDocument();
  });

  test('SecondaryPagesLayout is rendering', async () => {
    render(<SecondaryPagesLayout children={undefined} />);
    expect(screen.getByTestId(testIds.layout)).toBeInTheDocument();
  });

  test('User can navigate to a home page', async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route index element={<Main />} />
        </Routes>
      </MemoryRouter>
    );
    const links: HTMLAnchorElement[] = screen.getAllByRole('link');
    expect(links[0].textContent).toEqual('Home');
    expect(links[0].href).toContain('/');
  });
});
