import React from 'react';
import Navbar from '../Navbar/Navbar';
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        Weather App
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
