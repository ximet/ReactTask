import { getUserCurrentPosition } from '../../helpers/positionHelper';
import { getLocationByCoords } from '../../Api/weatherApi';
import { GEO_ACTIONS } from '../reducers/geoReducer';

const userGeoDataReceived = ({ position, location }) => ({
  type: GEO_ACTIONS.USER_GEO_DATA_RECEIVED,
  payload: { position, location }
});

export const fetchUserGeoData = () => async dispatch => {
    const position = await getUserCurrentPosition();
    const { longitude, latitude } = position.coords;
    const location = await getLocationByCoords(longitude, latitude);
    return dispatch(userGeoDataReceived({ position: position.coords, location }));
};
