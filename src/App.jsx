import React from 'react';
import Icon from 'react-eva-icons';

import styles from 'assets/styles/all';

import Header from './Components/Layout/Header';
import Sidebar from './Components/Layout/Sidebar';
import Logo from './Components/Layout/Logo';
import MainView from './Components/Layout/MainView';


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
      <div className='App' style={AppStyle}>
        <Header>
          <Logo />
        </Header>
        <Sidebar />
        <MainView />
      </div>
    );
  }
}

export default App;
