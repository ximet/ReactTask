import React from 'react';
import PropTypes from 'prop-types';
import styles from 'assets/css/styles.scss';

function AppLogo(props) {
  const { text, imgSrc } = props;
  return (
    <div className={styles.appLogo}>
      <img 
        src={imgSrc} 
        className={styles.appLogoImg} 
        alt="appLogo" 
      />
      <span className={styles.appLogoText}>{text}</span>
    </div>
  );  
}

AppLogo.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default AppLogo;
