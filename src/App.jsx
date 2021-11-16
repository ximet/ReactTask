import styles from './main.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [data, setdata] = useState('');
  const [apiData, setApiData] = useState('');
  const [currentLocation, setcurrentLocation] = useState();
  const [theme, setTheme] = useState('dark');

  //CLIENT LOCATION AND DATA FETCH FROM API

  // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wZmEuZm9yZWNhLmNvbVwvYXV0aG9yaXplXC90b2tlbiIsImlhdCI6MTYzNzA1OTMyOCwiZXhwIjo5OTk5OTk5OTk5LCJuYmYiOjE2MzcwNTkzMjgsImp0aSI6IjYxNDdlMTEwY2Y2NzE1ZjAiLCJzdWIiOiJpdmFuc2hvc2hrb3YiLCJmbXQiOiJYRGNPaGpDNDArQUxqbFlUdGpiT2lBPT0ifQ.XZy1ejuB-5hwsFlyUvc0DoQw3DYN1iBZJptZidhoIzA';
  // useEffect(() => {
  //   console.log('currentLocation', currentLocation);
  //   currentLocation
  //     ? axios
  //         .get(
  //           `https://pfa.foreca.com/api/v1/location/${currentLocation.long},${currentLocation.lat}`,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${token}`
  //             }
  //           }
  //         )
  //         .then(result => setApiData(result))
  //     : null;
  // }, [currentLocation]);

  // useEffect(async () => {
  //   navigator.geolocation.getCurrentPosition(pos => {
  //     const newUserPos = {
  //       lat: pos.coords.latitude,
  //       long: pos.coords.longitude
  //     };
  //     setcurrentLocation(newUserPos);
  //   });
  // }, []);

  console.log('apiData FROM API: ', apiData);

  const TestComponent = () => {
    return <h1>PR Test</h1>;
  };

  const toggleThemeHandler = () => {
    theme === '' ? setTheme('dark') : setTheme('');
  };

  return (
    <div className={`main ${theme}`}>
      <div>Hello world!</div>
      <TestComponent />
      <button onClick={() => toggleThemeHandler()}>Toggle theme</button>
    </div>
  );
}

export default App;
