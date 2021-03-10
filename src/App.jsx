import React from 'react';
import styles from './App.module.css';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { buttonColor: 'red' };
    this.handleCLick = this.handleCLick.bind(this);
  }

  handleCLick() {
    this.setState((state) => {
      const color = state.buttonColor === 'red' ? 'blue' : 'red';
      return { buttonColor: color };
    });
  }

  render() {
    const { buttonColor } = this.state;
    return (
      <div className={styles.container}>
        <button type="button" onClick={this.handleCLick} className={`${styles.resize} ${styles[buttonColor]}`}>Click me</button>
      </div>
    );
  }
}

export default App;
