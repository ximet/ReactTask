import React from 'react';
import { logo, logoText } from './Logo.scss';

const Logo = ({ logoContent }) => (
  <div className={ logo }>
    <span className={ logoText }>{ logoContent.text }</span>
  </div>
);

export default Logo;