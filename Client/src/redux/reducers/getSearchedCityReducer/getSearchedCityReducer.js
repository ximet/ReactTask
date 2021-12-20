import { GET_SEARCHED_CITY } from '../../actions/types';

const INITIAL_STATE = {
  data: {}
};
const getSearchedCityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SEARCHED_CITY:
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export default getSearchedCityReducer;
