import React from 'react';

import Header from './Components/Layout/Header';
import Sidebar from './Components/Layout/Sidebar';
import AppLogoLink from './Components/Layout/Logo';
import MainView from './Components/Layout/MainView';

import styles from 'styles/all';

class App extends React.PureComponent {
  render() {
    const AppStyle = {
      display: 'grid',
      gridTemplateAreas: '"sidebar header" "sidebar main" "footer footer"',
      gridTemplateColumns: 'auto 1fr',
      gridTemplateRows: '80px 1fr',
      minHeight: '100vh',
    };

    return (
      <div className="App" style={AppStyle}>
        <Header>
          <AppLogoLink />
        </Header>
        <Sidebar />
        <MainView />
      </div>
    );
  }
}

export default App;
