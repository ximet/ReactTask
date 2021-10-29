import { dailyWeather } from './dailyWeatherReducer';
import { SET_DAYS } from '../actions/dailyWeatherActions';

describe('Daily weather Reducer', () => {
  it('should return setted daily weather state when SET_DAYS action is required', () => {
    const action = {
      type: SET_DAYS,
      payload: {
        dailyWeather: [
          {
            date: '20211-10-27',
            symbol: 'd001',
            symbolPhrase: 'cloudy',
            maxTemp: 30,
            minTemp: 25
          },
          {
            date: '20211-10-27',
            symbol: 'd002',
            symbolPhrase: 'clear',
            maxTemp: 29,
            minTemp: 20
          },
          {
            date: '20211-10-27',
            symbol: 'd003',
            symbolPhrase: 'clear',
            maxTemp: 20,
            minTemp: 15
          }
        ]
      }
    };

    const initialState = [];

    const expectedResult = [
      {
        date: '20211-10-27',
        symbol: 'd001',
        symbolPhrase: 'cloudy',
        maxTemp: 30,
        minTemp: 25
      },
      {
        date: '20211-10-27',
        symbol: 'd002',
        symbolPhrase: 'clear',
        maxTemp: 29,
        minTemp: 20
      },
      {
        date: '20211-10-27',
        symbol: 'd003',
        symbolPhrase: 'clear',
        maxTemp: 20,
        minTemp: 15
      }
    ];

    expect(dailyWeather(initialState, action)).toEqual(expectedResult);
  });

  it(`should return the default state if action doesn't exist`, () => {
    const nonExistingAction = { type: 'NON_EXISTING_ACTION' };
    const expectedResult = 'object';

    expect(typeof dailyWeather(undefined, nonExistingAction)).toEqual(expectedResult);
  });
});
