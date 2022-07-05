import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './Store/index';

import './assets/css/fonts.css';
import './assets/css/reset.css';
import styles from './assets/css/general.css';

import Header from './Components/Header/Header';
import List from './Pages/List';
import Contacts from './Pages/Contacts';
import Info from './Pages/Info';
import City from './Pages/City';
import Homepage from './Pages/Homepage';

const changeTheme = () => {
  document.querySelector('body').classList.toggle(styles.dark);
};
// const changeTheme = () => {
//   let theme = Boolean(localStorage.getItem('darkTheme'));
//   console.log(theme);
//   theme = !theme;
//   localStorage.setItem('darkTheme', theme);
// };

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header changeTheme={changeTheme} />
      <main>
        <Switch>
          <Route path="/" exact component={props => <Homepage {...props} />} />
          <Route path="/list" exact component={props => <List {...props} />} />
          <Route path="/info" exact component={props => <Info {...props} />} />
          <Route path="/contacts" exact component={props => <Contacts {...props} />} />
          <Route path="/city" exact component={props => <City {...props} />} />
          <Route path="*" exact component={props => <div>Page not found!</div>} />
        </Switch>
      </main>
    </Router>
  </Provider>,
  document.getElementById('app')
);
