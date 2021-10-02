import * as React from 'react';
import { useSelector, useDispatch } from 'hooks';
import { setLoggedIn } from 'store/auth/actions';
import { TOKEN } from 'constants/localStorage';

const AppProvider = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (token) dispatch(setLoggedIn(true));
  }, [dispatch]);

  return <>{children(isLoggedIn)}</>;
};

export default AppProvider;
