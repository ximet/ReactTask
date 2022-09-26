import { useEffect } from 'react';
import useToken from './useToken';

function useAutorisation() {
  useEffect(() => {
    if (!localStorage.getItem('TOKEN')) {
      useToken();
    }
  }, []);
}
export default useAutorisation;
