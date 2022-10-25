import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import { CitySmallCard } from '../CitySmallCard';
import { mockGetWeather } from 'setupTests';

describe('CitySmallCard tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('component renders', async () => {
    render(<CitySmallCard lon={27.5373662} lat={53.8972927} cityName={'Minsk'} />);

    const loader = document.querySelector('div[class="loader"]');
    expect(loader).toBeInTheDocument();
  });

  test('component renders weather', async () => {
    render(<CitySmallCard lon={27.5373662} lat={53.8972927} cityName={'Minsk'} />);

    await waitFor(() => {
      expect(mockGetWeather).toHaveBeenCalledTimes(1);
      screen.getByText(/minsk/i);
    });

    expect(screen.getByText(/7°C/i)).toBeInTheDocument();
  });
});
