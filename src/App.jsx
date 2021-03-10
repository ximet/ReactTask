import React from 'react';
import styles from './App.module.css';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { isVisible: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isVisible: !state.isVisible,
    }));
  }

  render() {
    const { isVisible } = this.state;

    return (
      <div className={styles.App}>
        <button
          className={styles.visibilityButton}
          type="button"
          onClick={this.handleClick}>
          {isVisible ? 'Hide' : 'Say hi!'}
        </button>
        {isVisible && <p className={styles.text}>Hello, World!</p>}
      </div>
    );
  }
}

export default App;
