import type { LocationInfo, WeatherInfo } from 'types';
import { ActionType, Action } from '../actionTypes/location';

interface LocationState {
  search: {
    data: LocationInfo[] | null;
    loading: boolean;
    error: string | null;
  };
  info: {
    data: LocationInfo | null;
    loading: boolean;
    error: string | null;
  };
  weather: {
    current: {
      data: WeatherInfo | null;
      loading: boolean;
      error: string | null;
    };
  };
  query: string;
}

const initialState = {
  search: {
    data: null,
    loading: false,
    error: null
  },
  info: {
    data: null,
    loading: false,
    error: null
  },
  weather: {
    current: {
      data: null,
      loading: false,
      error: null
    }
  },
  query: ''
};

const locationReducer = (state: LocationState = initialState, action: Action): LocationState => {
  switch (action.type) {
    case ActionType.SEARCH_LOCATION_PENDING: {
      return {
        ...state,
        search: {
          ...state.search,
          loading: true
        }
      };
    }
    case ActionType.SEARCH_LOCATION_SUCCESS: {
      return {
        ...state,
        search: {
          ...state.search,
          loading: false,
          data: action.payload
        }
      };
    }
    case ActionType.SEARCH_LOCATION_FAIL: {
      return {
        ...state,
        search: {
          ...state.search,
          loading: false,
          error: action.payload
        }
      };
    }
    case ActionType.GET_LOCATION_INFO_PENDING: {
      return {
        ...state,
        info: {
          ...state.info,
          loading: true
        }
      };
    }
    case ActionType.GET_LOCATION_INFO_SUCCESS: {
      return {
        ...state,
        info: {
          ...state.info,
          loading: false,
          data: action.payload
        }
      };
    }
    case ActionType.GET_LOCATION_INFO_FAIL: {
      return {
        ...state,
        info: {
          ...state.info,
          loading: false,
          error: action.payload
        }
      };
    }
    case ActionType.GET_LOCATION_CURRENT_WEATHER_PENDING: {
      return {
        ...state,
        weather: {
          ...state.weather,
          current: {
            ...state.weather.current,
            loading: true
          }
        }
      };
    }
    case ActionType.GET_LOCATION_CURRENT_WEATHER_SUCCESS: {
      return {
        ...state,
        weather: {
          ...state.weather,
          current: {
            ...state.weather.current,
            loading: false,
            data: action.payload
          }
        }
      };
    }
    case ActionType.GET_LOCATION_CURRENT_WEATHER_FAIL: {
      return {
        ...state,
        weather: {
          ...state.weather,
          current: {
            ...state.weather.current,
            loading: false,
            error: action.payload
          }
        }
      };
    }
    case ActionType.SET_LOCATION_QUERY: {
      return {
        ...state,
        query: action.payload
      };
    }
    default:
      return state;
  }
};

export default locationReducer;
