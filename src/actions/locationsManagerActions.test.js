import { changeForecasts, SET_FORECAST } from './locationsManagerActions';

describe('Location actions', () => {
  it('Running action should return object of SET_FORECAST action', () => {
    const forecast = {
      temperature: 15,
      windSpeed: 3,
      humidity: 5
    };

    const expectResult = {
      type: SET_FORECAST,
      forecast: {
        temperature: 15,
        windSpeed: 3,
        humidity: 5
      },
      locationId: 20
    };
    expect(changeForecasts(forecast, 20)).toEqual(expectResult);
  });
});
