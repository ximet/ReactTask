import React, { useContext } from 'react';
import { TemperatureContext } from '../Context';

export default function NavControls(props) {
  const { temperature, setTemperature } = useContext(TemperatureContext);

  const updateTemp = () => {
    setTemperature(temperature === 'F' ? 'C' : 'F');
    document.getElementById('temperature-toggle').dataset.activeTemperature =
      temperature === 'F' ? 'C' : 'F';
  };

  const updateTheme = () => {
    const themeElement = document.getElementById('app');
    const newTheme = props.theme === 'dark' ? 'light' : 'dark';
    themeElement.dataset.theme = newTheme;
    document.getElementById('theme-toggle').dataset.activeTheme = newTheme;
    sessionStorage.setItem('theme', newTheme);
    props.changeTheme(newTheme);
  };

  return (
    <div className="nav-controls">
      <div className="nav-controls__temperature" onClick={() => updateTemp()}>
        <div id="temperature-toggle" data-active-temperature={temperature}>
          <p>C&deg;</p>
          <p>F&deg;</p>
        </div>
      </div>
      <span>|</span>
      <div className="nav-controls__theme" onClick={() => updateTheme()}>
        <div id="theme-toggle" data-active-theme={props.theme}>
          <p>Light</p>
          <p>Dark</p>
        </div>
      </div>
    </div>
  );
}
