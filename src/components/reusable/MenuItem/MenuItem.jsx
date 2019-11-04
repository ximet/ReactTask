import React from 'react';
import styles from 'assets/css/styles.css';

import Icon from 'components/reusable/icons/Icon';

class MenuItem extends React.Component {
  render() {
    return (
      <div className={styles.menuItem}>

        <Icon path={this.props.iconPath}/>
      
      <div className={styles.menuItemText}>{this.props.name}</div>
            
    </div>
    );  
  }
}

export default MenuItem;
