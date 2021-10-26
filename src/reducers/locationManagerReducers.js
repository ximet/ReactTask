import {
  CHANGE_LOCATION,
  CHANGE_SEARCH_STRING,
  SET_HOURLY_FORECAST,
  SET_DAILY_FORECAST,
  SET_FORECAST,
  SET_WARNINGS,
  CHANGE_FAVORITE_LOCATIONS
} from '../actions/locationsManagerActions';
import StorageConnection from '../services/StorageConnectionService';
import { CURRENT_LOCATION_STORAGE_CODE, FAVORITE_CITIES_STORAGE_CODE } from '../utils/constants';
import mockFavoriteCities from '../components/FavoriteCities/mockData';

const currentLocationFromStore = StorageConnection.getValue(CURRENT_LOCATION_STORAGE_CODE) || {};
const favoriteCitiesFromStore = StorageConnection.getValue(FAVORITE_CITIES_STORAGE_CODE) || [];

const initialState = {
  currentLocation: currentLocationFromStore,
  searchString: '',
  favoriteCitiesList: favoriteCitiesFromStore,
  forecasts: {},
  currentHourlyForecustType: {},
  warnings: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCATION: {
      return { ...state, currentLocation: action.currentLocation };
    }

    case CHANGE_SEARCH_STRING: {
      return { ...state, searchString };
    }

    case SET_FORECAST: {
      return { ...state, forecasts: { ...state.forecasts, [action.locationId]: action.forecast } };
    }

    case CHANGE_FAVORITE_LOCATIONS: {
      return { ...state, favoriteCitiesList: action.favoriteCitiesList };
    }

    case SET_HOURLY_FORECAST: {
      return { ...state, currentHourlyForecast: action.currentHourlyForecast };
    }

    case SET_DAILY_FORECAST: {
      return { ...state, currentDailyForecast: action.currentDailyForecast };
    }

    case SET_WARNINGS: {
      return { ...state, warnings: action.warnings };
    }

    default: {
      return state;
    }
  }
}
