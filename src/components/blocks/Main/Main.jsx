import React from 'react';
import { Switch, Route } from "react-router-dom";
import City from 'components/pages/City';
import World from 'components/pages/World';
import Loader from 'components/UI_Things/Loader';
import styles from 'assets/css/styles.scss';

function Main() {

  return ( 
    <main className={styles.appMain}>
    <Loader/>
      <Switch>
        <Route exact path='/' component={City} />
        <Route path='/location/' component={City} />
        <Route path='/world' component={World} />
      </Switch>
    </main>
  );
}

export default Main;
