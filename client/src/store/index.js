import { createStore } from 'redux';

const initialState = {
  selectedCity: []
};

const selectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CITY_SELECT':
      return {
        ...state,
        selectedCity: [...state.selectedCity, ...action.value]
      };
  }
  return state;
};

const store = createStore(selectionReducer);

export default store;
