import React from 'react';
import { render } from '@testing-library/react';
import DailyForecastItem from './DailyForecastItem';

const forecastItem = {
  time: '2021-12-20T13:00+04:00',
  symbol: 'd400',
  temperature: -0.78
};

describe('DailyForecastItem component', () => {
  it('component rendered successfully and match the snapshot', () => {
    const component = render(<DailyForecastItem forecastItem={forecastItem} />);
    expect(component).toMatchSnapshot();
  });
});
