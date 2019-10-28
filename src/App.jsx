import React from 'react';
import NavBar from './NavBar/NavBar.jsx';
import Header from './Header/Header.jsx';


class App extends React.PureComponent {
  render() {
    return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
    </div>
    );
  }
}

export default App;
