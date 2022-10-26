import { Provider } from 'react-redux';
import React from 'react';
import { fakeCurrentWeather, fakeDailyWeather, fakeHourlyWeather } from 'mocks/fakeData';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

const fakeState = {
  layer: 'air',
  theme: 'dark',
  currentWeather: {
    data: fakeCurrentWeather.current,
    loading: false,
    error: null
  },
  hourlyWeather: { data: fakeHourlyWeather, loading: false, error: null },
  dailyWeather: { data: fakeDailyWeather, loading: false, error: null }
};

const mockStore = createStore((state = fakeState) => state, applyMiddleware(thunk));

export const renderWithRouter = (components: React.ReactNode[], initialRoute: string = '/') => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      {components.map((el, index) => (
        <React.Fragment key={index}>{el}</React.Fragment>
      ))}
    </MemoryRouter>
  );
};

export const renderWithProvider = (component: React.ReactNode) => {
  return <Provider store={mockStore}>{component}</Provider>;
};
