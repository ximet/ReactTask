import { ACTION_TYPES } from '../../constants';

const setSelectedCity = (state = {}, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SET_SELECTED_CITY:
      return {
        ...state, ...payload,
      };
    default:
      return state;
  }
};

export default setSelectedCity;
