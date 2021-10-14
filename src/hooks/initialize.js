import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPosition } from '../actions/GeoDetectionActions';
import { getToken } from '../actions/ServerApiActions';

export function useInitialize() {
  const dispatch = useDispatch();
  const { isTokenReceived, tokenExpirationTime, fetchingError } = useSelector(
    state => state.serverApi
  );

  useEffect(() => {
    //get Geo location here
    dispatch(getPosition());
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
