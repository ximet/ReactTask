import initialState from './homePageInitialState';
import { HOMEPAGE_ACTIONS } from './homePageActions';

export const homePageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HOMEPAGE_ACTIONS.USER_POSITION_WEATHER_REQUESTED:
      return {
        ...state,
        loading: true,
        error: null
      };
    case HOMEPAGE_ACTIONS.USER_POSITION_WEATHER_RECEIVED:
      return {
        ...state,
        loading: false,
        currentWeather: payload.currentWeather
      };
    case HOMEPAGE_ACTIONS.USER_POSITION_WEATHER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

export default homePageReducer;