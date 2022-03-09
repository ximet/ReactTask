import React from 'react';
import { render } from '@testing-library/react';
import CurrentWeatherItem from './CurrentWeatherItem';

describe('CurrentWeatherItem component', () => {
  it('renders with name and data', () => {
    const component = render(<CurrentWeatherItem name="name" data="data" />);
    expect(component.getByTestId('data').textContent).toEqual('data');
    expect(component.getByTestId('name').textContent).toEqual('name');
  });
});
