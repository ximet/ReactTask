import { CHANGE_LOCATION, CHANGE_SEARCH_STRING } from '../actions/locationsManagerActions';

const initialState = {
  currentLocation: {},
  searchString: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCATION: {
      return { ...state, currentLocation: action.currentLocation };
    }

    case CHANGE_SEARCH_STRING: {
      return { ...state, searchString };
    }

    default: {
      return state;
    }
  }
}
