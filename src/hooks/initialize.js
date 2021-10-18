import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPosition } from '../actions/GeoDetectionActions';
import { getToken } from '../actions/ServerApiActions';
import { putSelectedLocation } from '../actions/SelectedLocationsActions';
import { DEFAULT_SELECTED_LOCATIONS } from '../constants/constants';

export function useInitialize() {
  const dispatch = useDispatch();
  const { isTokenReceived, tokenExpirationTime, fetchingError } = useSelector(
    state => state.serverApi
  );

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    //get token initially or if it's expired
    if (
      (!isTokenReceived || (tokenExpirationTime && tokenExpirationTime <= Number(new Date()))) &&
      !fetchingError
    ) {
      dispatch(getToken());
    }
  }, [isTokenReceived, tokenExpirationTime, fetchingError, dispatch]);
}
