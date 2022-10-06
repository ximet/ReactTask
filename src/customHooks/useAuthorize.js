import { useEffect } from 'react';
import { TOKEN } from '../services/constants.js';

const URL = 'http://localhost:5020/auth';

const useAuthorize = () => {
  useEffect(() => {
    (async () => {
      if (!localStorage.getItem(TOKEN)) {
        const response = await fetch(URL);
        const { access_token } = await response.json();
        localStorage.setItem(TOKEN, access_token);
      }
    })();
  }, []);
};

export { useAuthorize };
