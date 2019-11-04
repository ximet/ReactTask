import React from 'react';
import styles from 'assets/css/styles.css';

import Icon from 'components/reusable/icons/Icon';

class ListPane extends React.Component {
  render() {
    return (
      <div className={styles.WeatherListPane}>
        <div className={styles.location}>
          {this.props.location}
          <Icon path={this.props.icon} />
        </div>
        <div className={styles.temperature}>          
          <span className={styles.value}>{this.props.temperature}</span>
          <span className={styles.digit}>C°</span>
        </div>
        <div className={styles.weatherIcon}>
          <Icon path={this.props.weatherStateIcon} />
        </div> 
      </div>
    );  
  }
}

export default ListPane;
