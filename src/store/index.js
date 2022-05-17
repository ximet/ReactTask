import { createStore } from 'redux';
import { SAVE_SEARCH, DELETE_SEARCH } from '../config/constants';

const initialState = {
  savedSearch: []
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SEARCH:
      return {
        ...state,
        savedSearch: [...state.savedSearch, action.value]
      };
    case DELETE_SEARCH:
      const searches = [...state.savedSearch];
      const updatedCities = searches.filter(city => city.id !== action.id);
      return {
        ...state,
        savedSearch: updatedCities
      };
  }
  return state;
};

const store = createStore(searchReducer);

export default store;
