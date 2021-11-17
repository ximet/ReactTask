import styles from './main.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/layout/Header/Header';
import Wrapper from './components/layout/Wrapper/Wrapper';
import Title from './components/layout/Typography/Title/Title';
import Info from './components/Pages/Info/Info';
import Feedback from './components/Pages/Feedback/Feedback';
import Explore from './components/Pages/Explore/Explore';
import Country from './components/Pages/Explore/Country';
import Home from './components/Pages/Home/Home';

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

  // console.log('apiData FROM API: ', apiData);

  const toggleThemeHandler = () => {
    theme === '' ? setTheme('dark') : setTheme('');
  };

  return (
    <Router>
      <div className={`main ${theme}`}>
        <Header />
        <Wrapper>
          <div className={styles.ThemeToggler}>
            <button className={styles.ThemeTogglerButton} onClick={() => toggleThemeHandler()}>
              Toggle theme
            </button>
          </div>
          <Switch>
            <Route path="/information">
              <Info />
            </Route>
            <Route path="/feedback">
              <Feedback />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path={`/country/:country`}>
              <Country />
            </Route>
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
