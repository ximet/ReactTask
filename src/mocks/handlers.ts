import { rest } from 'msw';
import { fakeCurrentWeather, fakeHourlyWeather } from './fakeData';

export const handlers = [
  rest.get('https://pfa.foreca.com/api/v1/current/27.5373662,53.8972927', (req, res, ctx) => {
    return res(ctx.json(fakeCurrentWeather));
  })
];
