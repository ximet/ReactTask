import React from 'react';
import YourLocation from 'components/pages/YourLocation';
import World from 'components/pages/World';
import styles from 'assets/css/styles.scss';


class Main extends React.Component {

  render() {
    return ( 
      <main className={styles.appMain}>
        <YourLocation />      
        <World />
      </main> 
    );
  }
}

export default Main;
