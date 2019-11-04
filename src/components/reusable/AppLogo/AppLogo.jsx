import React from 'react';
import styles from 'assets/css/styles.css';

class AppLogo extends React.Component {
  render() {
    return (
      <div className={styles.appLogo}>
        <img 
          src={this.props.logoProps.imgSrc} 
          className={styles.appLogoImg} 
          alt="appLogo" />
        <span className={styles.appLogoText}>{this.props.logoProps.text}</span>
      </div>
    );  
  }
}

export default AppLogo;
