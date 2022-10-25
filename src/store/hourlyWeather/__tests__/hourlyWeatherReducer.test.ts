import { hourlyWeatherReducer } from 'store/hourlyWeather/hourlyWeatherReducer';
import { HourlyWeatherActions } from 'store/hourlyWeather/hourlyWeatherActions';
import { fakeHourlyWeather } from 'mocks/fakeData';

describe('hourlyWeatherReducer', () => {
  test('request start', () => {
    expect(
      hourlyWeatherReducer(
        {
          data: null,
          loading: false,
          error: null
        },
        { type: HourlyWeatherActions.REQUEST_HOURLY_WEATHER }
      )
    ).toEqual({
      data: null,
      loading: true,
      error: null
    });
  });

  test('request success', () => {
    expect(
      hourlyWeatherReducer(
        {
          data: null,
          loading: true,
          error: null
        },
        {
          type: HourlyWeatherActions.REQUEST_HOURLY_WEATHER_SUCCESS,
          payload: fakeHourlyWeather
        }
      )
    ).toEqual({
      data: fakeHourlyWeather,
      loading: false,
      error: null
    });
  });
  test('request failed', () => {
    expect(
      hourlyWeatherReducer(
        {
          data: null,
          loading: true,
          error: null
        },
        {
          type: HourlyWeatherActions.REQUEST_HOURLY_WEATHER_FAILED,
          payload: 'Failed to fetch'
        }
      )
    ).toEqual({
      data: null,
      loading: false,
      error: 'Failed to fetch'
    });
  });
  test('default case', () => {
    expect(
      hourlyWeatherReducer(
        {
          data: null,
          loading: true,
          error: null
        },
        {
          type: 'sdfsf' as HourlyWeatherActions.REQUEST_HOURLY_WEATHER
        }
      )
    ).toEqual({
      data: null,
      loading: true,
      error: null
    });
  });
});
