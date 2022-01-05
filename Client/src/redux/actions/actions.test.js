import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { getLocalWeather, getSearchedCityData, getCurrentSavedCity } from '../actions/actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mock = new MockAdapter(axios);
const store = mockStore({});

describe('Testing actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should execute getLocalWeather', () => {
    mock.onGet('/getLocalWeather').reply(200, {
      data: [{ item: 1, item2: 2 }]
    });

    store.dispatch(getLocalWeather()).then(() => {
      let expectedActions = [
        {
          type: 'GET_LOCAL_WEATHER',
          payload: {
            data: [{ item: 1, item2: 2 }]
          }
        }
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should execute getSearchedCityData', () => {
    mock.onGet('/getSearchedCityData').reply(200, {
      data: [{ item: 1, item2: 2 }]
    });

    store.dispatch(getSearchedCityData()).then(() => {
      let expectedActions = [
        {
          type: 'GET_SEARCHED_CITY',
          payload: {
            data: [{ item: 1, item2: 2 }]
          }
        }
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should execute getCurrentSavedCity', () => {
    mock.onGet('/getCurrentSavedCity').reply(200, {
      data: [{ item: 1, item2: 2 }]
    });

    store.dispatch(getCurrentSavedCity()).then(() => {
      let expectedActions = [
        {
          type: 'CURRENT_SAVED_CITY',
          payload: {
            data: [{ item: 1, item2: 2 }]
          }
        }
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
