import * as React from 'react';
import { shallowEqual } from 'react-redux';
import { useSelector, useDispatch } from 'hooks';
import { TOKEN } from 'constants/localStorage';
import { setLoggedIn } from 'store/auth/actions';
import { RootState } from 'store/types';

const useAuth = (): RootState['auth'] => {
  const auth = useSelector<RootState, RootState['auth']>(
    (state) => state.auth,
    shallowEqual,
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (token) dispatch(setLoggedIn(true));
  }, [dispatch]);

  return auth;
};

export default useAuth;
