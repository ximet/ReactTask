import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { rest } from 'msw';
import { server } from 'mocks/server';

import { CitySmallCard } from '../CitySmallCard';
import { fakeCurrentWeather } from 'mocks/fakeData';

describe('CitySmallCard tests', () => {
  test('component renders', async () => {
    render(<CitySmallCard lon={27.5373662} lat={53.8972927} cityName={'Minsk'} />);

    const loader = document.querySelector('div[class="loader"]');
    expect(loader).toBeInTheDocument();
  });

  test('component renders weather', async () => {
    server.use(
      rest.get('https://pfa.foreca.com/api/v1/current/27.5373662,53.8972927', (req, res, ctx) => {
        return res(ctx.json(fakeCurrentWeather));
      })
    );

    render(<CitySmallCard lon={27.5373662} lat={53.8972927} cityName={'Minsk'} />);

    await waitFor(() => screen.getByText(/minsk/i));

    expect(screen.getByText(/7°C/i)).toBeInTheDocument();
  });
});
