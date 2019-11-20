import React from 'react';
import { Link } from "react-router-dom";
import styles from 'assets/css/styles.scss';

import Icon from 'components/reusable/icons/Icon';

class MenuItem extends React.Component {
  render() {
    return (
      <Link to={this.props.path} className={styles.menuItem}>
        <Icon path={this.props.iconPath}/>
        <div className={styles.menuItemText}>{this.props.name}</div>
      </Link>
    );  
  }
}

export default MenuItem;
