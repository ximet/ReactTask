import React from 'react';
import AppLogo from './components/AppLogo/AppLogo';

import styles from './assets/css/styles.css';
const logoSrc = require('./assets/images/logo192.png');

class App extends React.PureComponent {
  render() {
    return (
      <header className={styles.appHeader}>
        <AppLogo logoSrc={logoSrc}/>
      </header>
    );
  }
}

export default App;
