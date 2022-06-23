import React, { useEffect, useState } from 'react';

export default function App() {
  const [token, setData] = useState([]);

  const req = async () => {
    fetch('http://localhost:3000/a', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      body: JSON.stringify(token)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  };

  const attemptLogin = async () => {
    fetch('http://localhost:3000/login')
      .then(response => response.json())
      .then(data => setData(data));
  };

  useEffect(() => {
    attemptLogin();
  }, []);

  return (
    <div>
      Data: {token != undefined ? 'Logged in' : 'Not Logged in'}
      <button onClick={req}>get info</button>
    </div>
  );
}
