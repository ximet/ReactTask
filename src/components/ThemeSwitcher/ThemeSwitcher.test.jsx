import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ThemeSwitcher from './ThemeSwitcher';
import { themeReducer } from '../../store/reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(themeReducer, initialState) } = {},
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

const initialState = { theme: 'light' };

describe('ThemeSwitcher component', () => {
  it('the component is rendered with the correct store value', () => {
    const { getByTestId } = renderWithRedux(<ThemeSwitcher />, { initialState });
    const { theme } = getByTestId('switcher-icon').dataset;
    expect(theme).toBe('light');
  });
});
