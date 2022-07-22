export interface LocationState {
  currentLocation: string;
  prevSearches: string[];
}
export enum LocationActions {
  SAVE_CURRENT_LOCATION,
  SAVE_SEARCH
}
export interface LocationActionConfig {
  type: LocationActions;
  payload: string;
}

const getPrevSearches = (): string[] => {
  const prevSearches: string | null = localStorage.getItem('prevSearches');
  if (prevSearches) {
    return JSON.parse(localStorage.getItem('prevSearches')!);
  } else return [];
};

const initialState: LocationState = {
  currentLocation: '',
  prevSearches: getPrevSearches()
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
    if (action.payload === '') {
      return state;
    }
    if (state.prevSearches.includes(action.payload)) {
      const filteredPrevSearches = [...state.prevSearches].filter(
        element => element !== action.payload
      );
      const prevSearches = [action.payload, ...filteredPrevSearches];
      localStorage.setItem('prevSearches', JSON.stringify(prevSearches));
      return {
        ...state,
        prevSearches: prevSearches
      };
    }
    if (state.prevSearches.length > 4) {
      const slicedPrevSearches = [...state.prevSearches].slice(0, 4);
      const prevSearches = [action.payload, ...slicedPrevSearches];
      localStorage.setItem('prevSearches', JSON.stringify(prevSearches));
      return {
        ...state,
        prevSearches: prevSearches
      };
    } else {
      const prevSearches = [action.payload, ...state.prevSearches];
      localStorage.setItem('prevSearches', JSON.stringify(prevSearches));
      return {
        ...state,
        prevSearches: prevSearches
      };
    }
  }
  return state;
};

export default LocationReducer;
