import { useEffect } from 'react';

import { serverURL } from '../components/constants';
import { TOKEN_KEY } from '../components/constants';

const useAuthorize = () => {
  useEffect(() => {
    (async () => {
      if (!localStorage.getItem(TOKEN_KEY)) {
        const response = await fetch(serverURL);
        const { access_token } = await response.json();
        console.log(access_token);
        localStorage.setItem(TOKEN_KEY, access_token);
      }
    })();
  }, []);
};

export default useAuthorize;
