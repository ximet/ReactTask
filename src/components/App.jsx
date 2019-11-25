import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Route, Switch, Link } from 'react-router-dom';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import NavBar from './NavBar/NavBar.jsx';
import CityList from './CityList/CityList.jsx';
import Background from '../img/weath.jpg';

// import Button from './Main/Button/Button.jsx';


class App extends React.PureComponent {
  render() {
    return (
    <div>
      <NavBar />
      <Header />
      {/* {this.props.Store.main.mainState ?
      <Main city="Minsk" temperature="+26" weatherBackground={Background} /> :
      <CityList />
      } */}

      <Switch>
        <Route exact path="/">
          <Main city="Minsk" temperature="+26" weatherBackground={Background} /> 
        </Route>
        <Route path="/cities">
          <CityList />
        </Route>
      </Switch>

    </div>
    );
  }
}

export default connect(
  state => ({
    Store: state
  }),
  dispatch => ({})
)(App);