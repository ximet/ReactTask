import React from 'react';

// import styles from './styles.css';

import Header from './Header/Header.jsx';
import NavBar from './NavBar/NavBar.jsx';
import Main from './Main/Main.jsx';
import CityList from './CityList/CityList.jsx';
import Background from './img/weath.jpg';

import { connect } from 'react-redux'


class App extends React.PureComponent {
  render() {
    console.log(this.props.testStore);
    return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      {/* <Main city="Minsk" temperature="+26" weatherBackground={Background}></Main> */}
      <CityList></CityList>
      <div>
        <input type="text" />
        <button>Add track</button>
        <ul>
          {this.props.testStore.map((track, index) =>
          <li key={index}>{track}</li>
          )}
        </ul>
      </div>
      </div>
    );
  }
}

// export default App;
// export default connect(mapStateToProps)(App);

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);