import {
  CHANGE_LOCATION,
  CHANGE_SEARCH_STRING,
  SET_HOURLY_FORECAST,
  SET_DAILY_FORECAST
} from '../actions/locationsManagerActions';
import StorageConnection from '../services/StorageConnectionService';
import { CURRENT_LOCATION_STORAGE_CODE, FAVORITE_CITIES_STORAGE_CODE } from '../utils/constants';

const currentLocationFromStore = StorageConnection.getValue(CURRENT_LOCATION_STORAGE_CODE) || {};
const favoriteCitiesFromStore = StorageConnection.getValue(FAVORITE_CITIES_STORAGE_CODE) || [];

const initialState = {
  currentLocation: currentLocationFromStore,
  searchString: '',
  favoriteCitiesList: favoriteCitiesFromStore,
  forecasts: {},
  currentHourlyForecustType: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCATION: {
      return { ...state, currentLocation: action.currentLocation };
    }

    case CHANGE_SEARCH_STRING: {
      return { ...state, searchString };
    }

    case SET_HOURLY_FORECAST: {
      return { ...state, currentHourlyForecast: action.currentHourlyForecast };
    }

    case SET_DAILY_FORECAST: {
      return { ...state, currentDailyForecast: action.currentDailyForecast };
    }

    default: {
      return state;
    }
  }
}
