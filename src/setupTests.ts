import '@testing-library/jest-dom';

import { fakeCurrentWeather } from 'mocks/fakeData';

export const mockGetWeather = jest.fn().mockResolvedValue(fakeCurrentWeather);

jest.mock('services/getWeather', () => ({
  getWeather: mockGetWeather
}));

jest.mock('react-chartjs-2', () => ({
  ...jest.requireActual('react-chartjs-2'),
  Line: () => null
}));

jest.mock('chart.js', () => ({
  ...jest.requireActual('chart.js'),
  Chart: {
    register: jest.fn()
  },
  registerables: []
}));
