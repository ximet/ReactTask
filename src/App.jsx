import React from 'react';

// import styles from './styles.css';

import Header from './Header/Header.jsx';
import NavBar from './NavBar/NavBar.jsx';
import Main from './Main/Main.jsx';
import CityList from './CityList/CityList.jsx';

import Background from './img/weath.jpg';


class App extends React.PureComponent {
  render() {
    return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      {/* <Main city="Minsk" temperature="+26" weatherBackground={Background}></Main> */}
      <CityList></CityList>
    </div>
    );
  }
}

export default App;
