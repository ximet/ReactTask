import { useEffect } from 'react';

const URL = 'http://localhost:5020/auth';

const useAuthorize = () => {
  useEffect(() => {
    (async () => {
      if (!localStorage.getItem('token')) {
        const response = await fetch(URL);
        const { access_token } = await response.json();
        localStorage.setItem('token', access_token);
      }
    })();
  }, []);
};

export default useAuthorize;
