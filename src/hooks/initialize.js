import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPosition } from '../actions/GeoDetectionActions';
import { getToken } from '../actions/ServerApiActions';
import { putSelectedLocation } from '../actions/SelectedLocationsActions';
import { DEFAULT_SELECTED_LOCATIONS, TOKEN_UPDATE_INTERVAL } from '../constants/constants';

export function useInitialize() {
  const dispatch = useDispatch();

  useEffect(() => {
    //get token initially
    dispatch(getToken());

    //get token after expiration
    const tokenTimer = setInterval(() => {
      dispatch(getToken());
    }, TOKEN_UPDATE_INTERVAL);

    //get Geo location here
    dispatch(getPosition());
    //push default locations here
    DEFAULT_SELECTED_LOCATIONS.forEach(id => {
      dispatch(
        putSelectedLocation({
          id: String(id),
          locationInfo: null,
          locationWeather: null
        })
      );
    });

    return function () {
      clearInterval(tokenTimer);
    };
  }, [dispatch]);
}
