import React from 'react';
import styles from 'assets/css/styles.css';

class Icon extends React.Component {
  render() {
    if(this.props.path){
      return (
        <div className={`${styles.icon}`}>
          <img className={styles.iconImg} src={this.props.path} alt="svg"/>
        </div>
      );  
    }
    return ''
  }
}

export default Icon;
