import { useState, useEffect } from 'react';
import { refreshAccessToken } from '../common/auth';

const useAuth = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    (async () => {
      await refreshAccessToken();
      setIsAuthenticating(false);
    })();
  }, []);

  return isAuthenticating;
};

export default useAuth;
