import { fakeCurrentWeather, fakeDailyWeather, fakeHourlyWeather } from 'mocks/fakeData';
import { hourlyWeatherSelector } from '../hourlyWeatherSelectors';

describe('hourlyWeather selector', () => {
  test('return correct value', () => {
    expect(
      hourlyWeatherSelector({
        layer: 'air',
        theme: 'dark',
        currentWeather: {
          data: fakeCurrentWeather.current,
          loading: false,
          error: null
        },
        hourlyWeather: { data: fakeHourlyWeather, loading: false, error: null },
        dailyWeather: { data: fakeDailyWeather, loading: false, error: null }
      })
    ).toEqual({
      data: fakeHourlyWeather,
      loading: false,
      error: null
    });
  });
});
