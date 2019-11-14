import React from 'react';
import Header from './Header/Header.jsx';
import NavBar from './NavBar/NavBar.jsx';
import Main from './Main/Main.jsx';
import CityList from './CityList/CityList.jsx';
import Background from './img/weath.jpg';

import { connect } from 'react-redux'


class App extends React.PureComponent {
  render() {
    console.log(this.props);
    console.log(this.props.weatherMainStore);
    console.log(this.props.weatherMainStore.main.mainState);
    let main;
    if (this.props.weatherMainStore.main.mainState) {
      main =  <Main city="Minsk" temperature="+26" weatherBackground={Background}></Main>;
    } else {
      main = <CityList></CityList>;
    }
    return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      {main}
      </div>
    );
  }
}

export default connect(
  state => ({
    weatherMainStore: state
  }),
  dispatch => ({})
)(App);