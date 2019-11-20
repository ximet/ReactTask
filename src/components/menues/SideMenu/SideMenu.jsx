import React from 'react';
import MenuItem from 'components/reusable/MenuItem/MenuItem';
import styles from 'assets/css/styles.scss';

function SideMenu(props) {
  return (
    <div className={styles.menuVertical}>
      {props.navigation.map((item, key) => <MenuItem key={item.name} {...item} />)}
    </div>
  );
}

export default SideMenu;
