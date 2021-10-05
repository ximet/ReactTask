import * as React from 'react';
import { shallowEqual } from 'react-redux';
import { useSelector, useDispatch } from 'hooks';
import { TOKEN } from 'constants/localStorage';
import { setLoggedIn } from 'store/auth/actions';

const useAuth = () => {
  const auth = useSelector((state) => state.auth, shallowEqual);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (token) dispatch(setLoggedIn(true));
  }, [dispatch]);

  return auth;
};

export default useAuth;
