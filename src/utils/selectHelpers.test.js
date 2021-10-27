import { selectCurrentForecast } from './selectorsForecast';

describe('Selectors of forecasts', () => {
  it('Selector should return forecast object', () => {
    const forecasts = {
      15: {
        forecast: {
          temperature: 20,
          windSpeed: 5,
          humidity: 3
        }
      },
      20: {
        forecast: {
          temperature: 25,
          windSpeed: 2,
          humidity: 5
        }
      }
    };
    const locationId = 15;
    const expectResult = {
      temperature: 20,
      windSpeed: 5,
      humidity: 3
    };
    expect(selectCurrentForecast(forecasts, locationId)).toEqual(expectResult);
  });
});
