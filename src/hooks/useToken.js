import { useEffect } from 'react';
import { STORAGE_TOKEN } from '../helper/variables';

function useToken() {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  let raw = JSON.stringify({
    user: 'igorioha95',
    password: 'Va1mXa610o7v'
  });

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch('https://pfa.foreca.com/authorize/token?expire_hours=2', requestOptions)
    .then(response => response.json())
    .then(result => localStorage.setItem(STORAGE_TOKEN, result.access_token))
    .catch(error => console.log('error', error));
}
export default useToken;
