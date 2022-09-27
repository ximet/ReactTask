import { useEffect } from 'react';
import { STORAGE_TOKEN } from '../helper/variables';
import useToken from './useToken';

function useAutorisation() {
  useEffect(() => {
    if (!localStorage.getItem(STORAGE_TOKEN)) {
      useToken();
    }
  }, []);
}
export default useAutorisation;
