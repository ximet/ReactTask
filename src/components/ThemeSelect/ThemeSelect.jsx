import classes from './ThemeSelect.module.scss';
import ThemeContext from '../../providers/themeContext';
import ThemeDropDown from './components/ThemeDropDown/ThemeDropDown';
import { useState, useRef } from 'react';
import { useClickOutsideElement } from '../../hooks/commonHooks';

function ThemeSelect() {
  const [refElement, isOpen, setIsOpen] = useClickOutsideElement(false);

  const toggleDropDown = () => {
    setIsOpen(curState => !curState);
  };

  return (
    <ThemeContext.Consumer>
      {({ theme, selectTheme }) => (
        <div className={classes.themeSelectContainer}>
          <span className={classes.selectorTitle}>theme: </span>
          <span ref={refElement}>
            <span className={classes.selectedTheme} onClick={toggleDropDown}>
              {theme.name}
            </span>
            {isOpen && <ThemeDropDown currentTheme={theme} selectTheme={selectTheme} />}
          </span>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeSelect;
