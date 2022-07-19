export interface LocationState {
  currentLocation: string;
  prevSearches: string[];
}
enum LocationActions {
  SAVE_CURRENT_LOCATION,
  SAVE_SEARCH
}
export interface LocationActionConfig {
  type: LocationActions;
  payload: string;
}

const initialState: LocationState = {
  currentLocation: '',
  prevSearches: []
};

const LocationReducer = (
  state: LocationState = initialState,
  action: LocationActionConfig
): LocationState => {
  if (action.type === LocationActions.SAVE_CURRENT_LOCATION) {
    return {
      ...state,
      currentLocation: action.payload
    };
  }
  if (action.type === LocationActions.SAVE_SEARCH) {
    if (state.prevSearches.length > 4) {
      const prevSearches = [...state.prevSearches].slice(0, 4);
      return {
        ...state,
        prevSearches: [action.payload, ...prevSearches]
      };
    } else
      return {
        ...state,
        prevSearches: [action.payload, ...state.prevSearches]
      };
  }
  return state;
};

export default LocationReducer;
