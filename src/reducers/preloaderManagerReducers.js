import { CURRENT_LOCATION_IS_LOADING } from '../actions/preloaderManagerActions';

const initialState = {
  currentLocation: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CURRENT_LOCATION_IS_LOADING: {
      return { ...state, currentLocation: action.isLoading };
    }

    default: {
      return state;
    }
  }
}
