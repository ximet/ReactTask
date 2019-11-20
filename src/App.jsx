import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from 'components/blocks/Header/Header';
import Main from 'components/blocks/Main/Main';
import Side from 'components/blocks/Side/Side';
import styles from 'assets/css/styles.scss';

class App extends React.PureComponent {
  render() {
    return (
      <div className={styles.appWrapper}>
        <Header />
        <section className={styles.appContent}>
          <Router>
            <Side />
            <Main />
          </Router> 
        </section>
      </div>
    );
  }
}

export default App;
