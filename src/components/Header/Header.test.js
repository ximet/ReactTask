import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { TempActions, TempUnitsReducer } from 'store';
import Header from './Header';

const mockStore = createStore(TempUnitsReducer);
const headerWrapper = ({ children }) => (
  <BrowserRouter>
    <Provider store={mockStore}>{children}</Provider>
  </BrowserRouter>
);

describe('<Header /> component', () => {
  test("renders 'Nice Weather App'", () => {
    render(<Header />, { wrapper: headerWrapper });

    const title = screen.getByText('Nice Weather App');
    expect(title).toBeInTheDocument();
  });

  test('Renders desktop navigation, not mobile by default', () => {
    const { getByTestId, queryByTestId } = render(<Header />, { wrapper: headerWrapper });

    expect(getByTestId('desktop-nav')).toBeInTheDocument();
    expect(queryByTestId('mobile-nav')).not.toBeInTheDocument();
  });

  test('Renders hamburger or cross; toggles mobile navigation on hamburger/X click', () => {
    const { queryByTestId } = render(<Header />, { wrapper: headerWrapper });

    expect(queryByTestId('hamburger')).toBeInTheDocument();
    expect(queryByTestId('x')).not.toBeInTheDocument();

    const div = queryByTestId('BurgerOrX');
    fireEvent.click(div);
    expect(queryByTestId('x')).toBeInTheDocument();
    expect(queryByTestId('mobile-nav')).toBeInTheDocument();
    expect(queryByTestId('hamburger')).not.toBeInTheDocument();

    fireEvent.click(div);
    expect(queryByTestId('hamburger')).toBeInTheDocument();
    expect(queryByTestId('mobile-nav')).not.toBeInTheDocument();
    expect(queryByTestId('x')).not.toBeInTheDocument();
  });

  test('Selects Fahrenheit', () => {
    const { getByTestId, getAllByTestId } = render(<Header />, { wrapper: headerWrapper });

    const select = getByTestId('select');
    const options = getAllByTestId('select-option');
    expect(select).toBeInTheDocument();

    fireEvent.change(select, { target: { value: TempActions.TO_FAHRENHEIT } });
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
  });
});
