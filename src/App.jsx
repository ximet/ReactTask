import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from 'components/blocks/Header/Header';
import MainContainer from './containers/MainContainer';
import SideBar from 'components/blocks/SideBar/SideBar';
import styles from './App.scss';

const App = () => (
  <Router>
    <Header />
    <section className={ styles.appWrapper }>
      <div className={ styles.container }>
        <SideBar />
        <MainContainer />
      </div>
    </section>
  </Router>
);

export default App;