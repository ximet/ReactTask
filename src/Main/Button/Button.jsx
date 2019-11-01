import React from 'react';
import styles from './styles.css';

function Button (props) {
    return (
    <div className = {styles.button}>
      <button>{props.title}</button>      
    </div>
    );
}


Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;