import React from 'react';
import { connect } from 'react-redux'
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import NavBar from './NavBar/NavBar.jsx';
import CityList from './CityList/CityList.jsx';
import Background from './img/weath.jpg';


class App extends React.PureComponent {
  render() {
    return (
    <div>
      <NavBar/>
      <Header/>
      {this.props.Store.main.mainState ? 
           <Main 
                 city="Minsk" 
                 temperature="+26" 
                 weatherBackground={Background}
           /> : 
           <CityList />
       }
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