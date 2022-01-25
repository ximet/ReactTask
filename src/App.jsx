import React, { useEffect, useState } from 'react'; // нужно ли импортировать в каждый файл?
import { getToken, searchLocation } from './api';
import { url, authData } from './constants';

function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    getToken(url, authData)
      .then(token => searchLocation(url, token))
      .then(data => setLocation(data.locations[0]));
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(location, null, 2)}</pre>
    </div>
  );
}

export default App;
