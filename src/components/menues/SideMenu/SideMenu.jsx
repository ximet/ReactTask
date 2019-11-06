import React from 'react';
import styles from 'assets/css/styles.css';
import MenuItem from 'components/reusable/MenuItem/MenuItem';

function SideMenu(props) {
  const Navigation = props.Navigation;
  const menuItems = Navigation.map((item, key) =>
    <MenuItem key={key.toString()} {...item} />
  );

  return (
    <div className={styles.menuVertical}>{menuItems}</div>
  );
}

export default SideMenu;