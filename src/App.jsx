import React, { useEffect, useState } from 'react'; // нужно ли импортировать в каждый файл?
import { getToken, searchLocation } from './api';
import SearchLocation from './components/SearchLocation';
import { url, authData } from './constants';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    getToken(url, authData).then(token => setToken(token));
  }, []);

  return (
    <div>
      <SearchLocation token={token} />
    </div>
  );
}

export default App;
