import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';

import styles from './App.css';

import { FC } from 'react';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
