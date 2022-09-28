import { useEffect } from 'react';
import { STORAGE } from '../helper/variables';
import useToken from './useToken';

function useAutorisation() {
  useEffect(() => {
    if (!localStorage.getItem(STORAGE.TOKEN)) {
      useToken();
    }
  }, []);
}
export default useAutorisation;
