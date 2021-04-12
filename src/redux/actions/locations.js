import { areRequestsCanceled } from '../../common/axios-config';
import { ERRORS } from '../../common/constants';
import { sortLocations } from '../../common/helpers';

const PREFIX = 'LOCATIONS/';

export const SET_LOCATIONS_REQUEST_STARTED = `${PREFIX}SET_LOCATIONS_REQUEST_STARTED`;
export const SET_LOCATIONS_REQUEST_SUCCEEDED = `${PREFIX}SET_LOCATIONS_REQUEST_SUCCEEDED`;
export const SET_LOCATIONS_REQUEST_FAILED = `${PREFIX}SET_LOCATIONS_REQUEST_FAILED`;
export const SET_LOCATIONS_REQUEST_FINISHED = `${PREFIX}SET_LOCATIONS_REQUEST_FINISHED`;

const setLocationsRequestStarted = { type: SET_LOCATIONS_REQUEST_STARTED };
const setLocationsRequestSucceeded = locations => ({
  type: SET_LOCATIONS_REQUEST_SUCCEEDED,
  payload: locations
});
const setLocationsRequestFailed = error => ({ type: SET_LOCATIONS_REQUEST_FAILED, payload: error });
const setLocationsRequestFinished = { type: SET_LOCATIONS_REQUEST_FINISHED };

export const getLocationData = location => async (dispatch, _, DataService) => {
  try {
    dispatch(setLocationsRequestStarted);

    const locations = await DataService.getLocationData(location);
    const sortedLocations = sortLocations(locations);

    dispatch(setLocationsRequestSucceeded(sortedLocations));
  } catch (error) {
    dispatch(setLocationsRequestFailed(error));

    if (!areRequestsCanceled(error)) {
      alert(ERRORS.DEFAULT.message);
    }
  } finally {
    dispatch(setLocationsRequestFinished);
  }
};
