import { SEARCH_LOCATION } from './types';

const initialState = {
  searchParam: '',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_LOCATION:
      return { ...state, searchParam: action.payload };
    default:
      return state;
  }
};
