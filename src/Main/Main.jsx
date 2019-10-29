import React from 'react';
import Card from './Card/Card.jsx';
import styles from './styles.css';


class Main extends React.Component {
  render() {
    return (
    <div className = {styles.main}>
        <div>
            <p className = {styles.city}> {this.props.city} </p>
            <p className = {styles.temperature}> {this.props.temperature} &#8451; </p>
        </div>
    </div>
    );
  }
}

export default Main;