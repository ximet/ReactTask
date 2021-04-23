import React from 'react';
import { List, Item, Link } from './MenuLust.Styles';

function MenuList() {
  return (
    <List>
      <Item>
        <Link to="/">Home</Link>
      </Item>
      <Item>
        <Link to="/feedback">Rate Us</Link>
      </Item>
      <Item>
        <Link to="/about">About Us</Link>
      </Item>
    </List>
  );
}

export default MenuList;
