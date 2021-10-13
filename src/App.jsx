import FooterWrapper from './layouts/FooterWrapper/FooterWrapper';
import HeaderWrapper from './layouts/HeaderWrapper/HeaderWrapper';

import 'normalize.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import ContentWrapperContainer from './containers/ContentWrapperContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getToken } from './actions/ServerApiActions';
import { getPosition } from './actions/GeoDetectionActions';

function useInitialize() {
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

function App() {
  const theme = useSelector(state => state.theme.name);

  useInitialize();

  return (
    <BrowserRouter>
      <div className={['global-wrapper', `theme-mode_${theme}`].join(' ')}>
        <HeaderWrapper />
        <ContentWrapperContainer />
        <FooterWrapper />
      </div>
    </BrowserRouter>
  );
}

export default App;
