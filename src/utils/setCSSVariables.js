const setCSSVariables = theme => {
  for (const value in theme) {
    document.documentElement.style.setProperty(`--${value}`, theme[value]);
  }
};

export default setCSSVariables;
