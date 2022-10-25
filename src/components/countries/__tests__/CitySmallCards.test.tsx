import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CitySmallCards } from 'components/countries/CitySmallCards';
import { fakeSortedCities } from 'mocks/fakeData';
import Main from 'components/main/Main';
import { renderWithProvider } from 'utils/testUtils';
import { renderWidthRouter } from 'utils/testUtils';

jest.mock('components/main/HourlySection.utils', () => ({
  ...jest.requireActual('components/main/HourlySection.utils'),
  getHourLabels: () => ['11', '15']
}));

describe('CitySmallCards test', () => {
  test('component renders', () => {
    render(
      renderWidthRouter([<CitySmallCards locations={fakeSortedCities} country={'United States'} />])
    );

    const wrapper = document.querySelector('div[class="cities-wrapper"]');
    expect(wrapper).toBeInTheDocument();
  });

  test('page redirects', async () => {
    render(
      renderWithProvider(
        renderWidthRouter([
          <Main />,
          <CitySmallCards locations={fakeSortedCities} country={'United States'} />,
          '/countries'
        ])
      )
    );

    const cityCard = await screen.findByTestId('city-card');

    await userEvent.click(cityCard);

    const mainPage = await screen.findByTestId('main-page');

    expect(mainPage).toBeInTheDocument();
  });
});
