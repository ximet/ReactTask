import React from 'react';
import SideMenu from './SideMenu/SideMenu';
import Header from './Header/Header';
import Main from './Main';

class App extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '8rem 1fr',
          gridTemplateRows: '4rem 1fr',
          gridTemplateAreas: `
          "sideMenu header"
          "sideMenu main"
          `,
          width: '100vw',
          height: '100vh',
        }}
      >
        <SideMenu />
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
