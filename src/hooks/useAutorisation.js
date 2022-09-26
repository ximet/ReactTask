import useToken from './useToken';

function useAutorisation() {
  if (!localStorage.getItem('TOKEN')) {
    useToken();
  }
}
