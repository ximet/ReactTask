import { GET_LOCAL_WEATHER } from '../../actions/types';

const INITIAL_STATE = {};
const localWeatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LOCAL_WEATHER:
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export default localWeatherReducer;
