import * as React from 'react';
import { shallowEqual } from 'react-redux';
import { authActions, authSelectors, AuthTypes } from 'store/auth';
import { useSelector, useDispatch } from 'hooks';
import { http } from 'services';
import { TOKEN } from 'constants/localStorage';

export const useInterceptors = (): void => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    http.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          const accessToken = window.localStorage.getItem(TOKEN);
          if (accessToken)
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error),
    );

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        switch (Number(error.response?.status)) {
          case 401:
            window.localStorage.removeItem(TOKEN);
            return dispatch(authActions.setLoggedIn(false));
          default:
            return Promise.reject(error);
        }
      },
    );
  }, [dispatch]);
};

export const useAuth = (): AuthTypes.AuthState => {
  const auth = useSelector(authSelectors.getAuth, shallowEqual);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (token) dispatch(authActions.setLoggedIn(true));
  }, [dispatch]);

  return auth;
};
