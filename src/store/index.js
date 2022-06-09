import { createStore } from 'redux';
import { SAVE_SEARCH, DELETE_SEARCH } from './actionTypes';

const initialState = {
  favoriteCities: []
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SEARCH:
      return {
        ...state,
        favoriteCities: [...state.favoriteCities, action.value]
      };
    case DELETE_SEARCH:
      const searches = [...state.favoriteCities];

      console.log('kopija', searches);
      const updatedCities = searches.filter(city => city.id !== action.id);
      console.log('update', updatedCities);
      console.log('id', action.id);

      return {
        ...state,
        favoriteCities: updatedCities
      };
  }
  return state;
};

const store = createStore(searchReducer);

export default store;
