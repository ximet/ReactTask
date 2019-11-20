import React from 'react';
import { Switch, Route } from "react-router-dom";
import YourLocation from 'components/pages/YourLocation';
import World from 'components/pages/World';
import styles from 'assets/css/styles.scss';

function Main() {

  return ( 
    <main className={styles.appMain}>
      <Switch>
        <Route exact path='/' >
          <YourLocation />
        </Route>
        <Route path='/location' >
          <YourLocation />
        </Route>
        <Route path='/world' >
          <World />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
