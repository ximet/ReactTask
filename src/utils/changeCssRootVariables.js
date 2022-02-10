const variables = [
  '--body-background',
  '--header-shadow',
  '--cards-background',
  '--text-color',
  '--nav-button-hover',
  '--fields-background',
  '--switcher-background',
];

const changeCssRootVariables = (theme) => {
  const root = document.querySelector(':root');

  variables.forEach((variableName) => {
    root.style.setProperty(variableName, `var(${variableName}-${theme})`);
  });
};

export default changeCssRootVariables;
