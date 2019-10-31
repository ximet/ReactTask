import React from 'react';
import styles from './styles.css';

class Button extends React.Component {
  render() {
    return (
    <div className = {styles.button}>
      <button>More</button>      
    </div>
    );
  }
}

export default Button;