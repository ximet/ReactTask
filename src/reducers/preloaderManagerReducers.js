import {
  CURRENT_LOCATION_IS_LOADING,
  DAILY_FORECAST_IS_LOADING,
  HOURLY_FORECAST_IS_LOADING,
  FAVORITE_FORECAST_IS_LOADING,
  SEARCH_IS_LOADING
} from '../actions/preloaderManagerActions';

const initialState = {
  currentLocation: false,
  dailyForecast: false,
  hourlyForecast: false,
  search: false,
  favorites: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CURRENT_LOCATION_IS_LOADING: {
      return { ...state, currentLocation: action.isLoading };
    }

    case DAILY_FORECAST_IS_LOADING: {
      return { ...state, dailyForecast: action.isLoading };
    }

    case HOURLY_FORECAST_IS_LOADING: {
      return { ...state, hourlyForecast: action.isLoading };
    }

    case FAVORITE_FORECAST_IS_LOADING: {
      return { ...state, favorites: { ...state.favorites, [action.locationId]: action.isLoading } };
    }

    case SEARCH_IS_LOADING: {
      return { ...state, search: action.isLoading };
    }

    default: {
      return state;
    }
  }
}
