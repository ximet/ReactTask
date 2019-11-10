import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Detailed from './components/Views/Detailed/Detailed';
import List from './components/Views/List/List';
import { navLinks } from './config/nav';
import styles from './App.scss';

class App extends React.PureComponent {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.sideBar}>
          <Nav links={navLinks} />
        </div>
        <div className={styles.content}>
          <Header />
          <Detailed />
          <List />
        </div>
      </div>
    );
  }
}

export default App;
