import React from 'react';
import Header from './Header/Header.jsx';
import NavBar from './NavBar/NavBar.jsx';
import Main from './Main/Main.jsx';


class App extends React.PureComponent {
  render() {
    return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <Main city="Minsk" temperature="+26"></Main>
    </div>
    );
  }
}

export default App;
