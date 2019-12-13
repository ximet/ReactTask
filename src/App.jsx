import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from 'components/blocks/Header/Header';
import MainContainer from './containers/MainContainer';
import SideBar from 'components/blocks/SideBar/SideBar';
import styles from './App.scss';

const App = () => (
  <div>
    <Header />
    <section className={ styles.appWrapper }>
      <div className={ styles.container }>
        <SideBar />
        <Router>
          <MainContainer />
        </Router>
      </div>
    </section>
  </div>
);

export default App;