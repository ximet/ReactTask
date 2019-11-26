import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Route, Switch, Link } from 'react-router-dom';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import NavBar from './NavBar/NavBar.jsx';
import CityList from './CityList/CityList.jsx';
import backImg1 from '../img/weath.jpg';
import backImg2 from '../img/dr.png';
import backImg3 from '../img/sn.png';

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
          <Main weatherBackground={this.props.Store.mainCity.temperature.substring(1) > 1 ? 
              (this.props.Store.mainCity.temperature.substring(1) > 20 ? 
              backImg2 : backImg1) : backImg3 } /> 
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