import React from 'react';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';

import SwitcherTheme from '../ThemeSwitcher/ThemeSwitcher';

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <Navigation />
      <MobileNavigation />
      <Search />
      <SwitcherTheme />
    </div>
  );
}

export default Header;
