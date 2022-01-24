import React, { useEffect, useState } from 'react'; // нужно ли импортировать в каждый файл?
import getToken from './getToken';
import {  proxy, url, authData } from './constants';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
    if (!token) {
      getToken(proxy, url, authData);
    }
  }, []);

  const getToken = async (proxy, url, authData) => {
    const res = await fetch(proxy + url + '/authorize/token', {
      method: 'POST',
      body: JSON.stringify(authData)
    });
  
    const data = await res.json();
  
    setToken(data.access_token);
  }

  return <div>{token}</div>;
}

export default App;
