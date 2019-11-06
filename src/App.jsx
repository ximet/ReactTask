import React from 'react';

import Header from 'components/blocks/Header/Header';
import Main from 'components/blocks/Main/Main';
import Side from 'components/blocks/Side/Side';

import styles from 'assets/css/styles.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className={styles.appWrapper}>
        <Header />
        <section className={styles.appContent}>
          <Side />
          <Main />
        </section>
      </div>
    );
  }
}

export default App;