import { SET_GEO_DETECTION_POSITION, SET_GEO_DETECTION_ERROR } from '../actionTypes';

const initialState = {
  position: null,
  error: null
};

const geoDetectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GEO_DETECTION_POSITION:
      return {
        ...state,
        position: action.payload.position
      };
    case SET_GEO_DETECTION_ERROR:
      return {
        ...state,
        error: action.payload.error
      };

    default:
      return state;
  }
};

export default geoDetectionReducer;
