import { SET_GEO_DETECTION_POSITION, SET_GEO_DETECTION_ERROR } from '../actionTypes';
import { geoDetectionService } from '../services/geoDetectionService';

export const setGeoDetectionPosition = position => ({
  type: SET_GEO_DETECTION_POSITION,
  payload: {
    position
  }
});

export const setGeoDetectionError = error => ({
  type: SET_GEO_DETECTION_ERROR,
  payload: {
    error
  }
});

export const getPosition = () => dispatch => {
  geoDetectionService
    .getPosition()
    .then(position => dispatch(setGeoDetectionPosition(position)))
    .catch(error => dispatch(setGeoDetectionError(error)));
};
