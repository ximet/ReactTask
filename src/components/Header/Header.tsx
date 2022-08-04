import { GiHamburgerMenu, Navigation, VscChromeClose } from 'components';
import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import {
  CombinedState,
  TempActionConfig,
  TempActions,
  TempUnits,
  Theme,
  ThemeContext,
  ThemeContextConfig
} from 'store';
import styles from './Header.module.scss';

const Header: React.FunctionComponent = () => {
  const { theme, toggleTheme }: ThemeContextConfig = useContext(ThemeContext);
  const dispatch: Dispatch<TempActionConfig> = useDispatch();
  const tempUnit = useSelector<CombinedState, TempUnits>(state => state.tempUnit);
  const isCelsius: boolean = tempUnit === TempUnits.CELSIUS;
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  const toggleTempUnits = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: event.target.value });
  };
  const burgerClickHandler = (): void => {
    setShowMobileNav(prevState => !prevState);
  };
  return (
    <header className={`${styles.header} ${theme === Theme.DARK && styles[theme]}`}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1 className={styles.titleContent}>
            <a href="/" className={styles.titleLink}>
              Nice Weather App
            </a>
          </h1>
          <a href="/" className={styles.logo}></a>
        </div>
        <Navigation classname={styles.nav} testid="desktop-nav" />
      </div>
      <div className={styles.navBurger} onClick={burgerClickHandler} data-testid="BurgerOrX">
        {!showMobileNav ? <GiHamburgerMenu /> : <VscChromeClose />}
      </div>
      {showMobileNav && (
        <Navigation
          classname={styles.mobileNav}
          setShowMobileNav={setShowMobileNav}
          testid="mobile-nav"
        />
      )}
      <div className={styles.buttonsContainer}>
        <div className={styles.degreesChanger}>
          <p className={styles.buttonLabel}>Choose temperature units:</p>
          <select
            className={`${styles.select} ${theme === Theme.DARK && styles[theme]}`}
            onChange={toggleTempUnits}
            data-testid="select"
          >
            <option
              className={styles.option}
              value={TempActions.TO_CELSIUS}
              selected={isCelsius}
              data-testid="select-option"
            >
              Celsius °C
            </option>
            <option
              className={styles.option}
              value={TempActions.TO_FAHRENHEIT}
              selected={!isCelsius}
              data-testid="select-option"
            >
              Fahrenheit °F
            </option>
          </select>
        </div>
        <p className={styles.buttonLabel}>Toggle theme: </p>
        <div
          className={`${styles.themeSwitcher} ${theme === Theme.DARK && styles[theme]}`}
          onClick={toggleTheme}
        >
          <div className={styles.themeSwitcherButton}></div>
          <div className={styles.moonMaker}></div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
