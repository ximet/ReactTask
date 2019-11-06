import React from 'react';
import styles from 'assets/css/styles.css';
import Icon from 'components/reusable/icons/Icon';

class YourLocation extends React.Component {
  render() {
    return ( 
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.weatherPaneBig}>
            <div className={styles.paneTitle}>
              <div>{this.props.location}</div>
              <Icon path={this.props.icon} />
            </div>
            <div className={styles.paneData}>
              <Icon path={this.props.weatherStateIcon} />
              <div className={styles.temperature}>
                <span className={styles.value}>{this.props.temperature}</span>
                <span className={styles.unit}>C°</span> 
              </div>
            </div>
            <div className={styles.paneBtns}>
              <div className={`${styles.btn} ${styles.blue}`}>more</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YourLocation;
  