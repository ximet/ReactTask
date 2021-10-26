import reducer from './locationManagerReducers';
import { CHANGE_LOCATION, SET_FORECAST } from '../actions/locationsManagerActions';

describe('Location reducers', () => {
  it('Reducer should return new current location state', () => {
    const initialState = {
      currentLocation: {}
    };

    const action = {
      type: CHANGE_LOCATION,
      currentLocation: {
        id: 11,
        name: 'London',
        country: 'United Kingdom',
        lat: 10,
        lon: 15
      }
    };

    const expectState = {
      currentLocation: {
        id: 11,
        name: 'London',
        country: 'United Kingdom',
        lat: 10,
        lon: 15
      }
    };

    expect(reducer(initialState, action)).toEqual(expectState);
  });

  it('Reducer should return default current location state', () => {
    const initialState = {
      currentLocation: {}
    };

    const action = {
      type: CHANGE_LOCATION,
      currentLocation: {}
    };

    const expectState = {
      currentLocation: {}
    };

    expect(reducer(initialState, action)).toEqual(expectState);
  });

  it('Reducer should return new forecasts state with created data', () => {
    const initialState = {
      forecasts: {}
    };

    const action = {
      type: SET_FORECAST,
      forecast: {
        temperature: 16,
        windSpeed: 5,
        humidity: 3
      },
      locationId: 15
    };

    const expectState = {
      forecasts: {
        15: {
          temperature: 16,
          windSpeed: 5,
          humidity: 3
        }
      }
    };

    expect(reducer(initialState, action)).toEqual(expectState);
  });

  it('Reducer should return new forecasts state with added new data', () => {
    const initialState = {
      forecasts: {
        15: {
          temperature: 16,
          windSpeed: 5,
          humidity: 3
        }
      }
    };

    const action = {
      type: SET_FORECAST,
      forecast: {
        temperature: 24,
        windSpeed: 3,
        humidity: 5
      },
      locationId: 20
    };

    const expectState = {
      forecasts: {
        15: {
          temperature: 16,
          windSpeed: 5,
          humidity: 3
        },
        20: {
          temperature: 24,
          windSpeed: 3,
          humidity: 5
        }
      }
    };

    expect(reducer(initialState, action)).toEqual(expectState);
  });

  it('Reducer should return new forecasts state with updated data', () => {
    const initialState = {
      forecasts: {
        15: {
          temperature: 16,
          windSpeed: 5,
          humidity: 3
        }
      }
    };

    const action = {
      type: SET_FORECAST,
      forecast: {
        temperature: 24,
        windSpeed: 5,
        humidity: 5
      },
      locationId: 15
    };

    const expectState = {
      forecasts: {
        15: {
          temperature: 24,
          windSpeed: 5,
          humidity: 5
        }
      }
    };

    expect(reducer(initialState, action)).toEqual(expectState);
  });
});
