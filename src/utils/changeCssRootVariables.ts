const variables: string[] = [
  '--body-background',
  '--header-shadow',
  '--cards-background',
  '--text-color',
  '--nav-button-hover',
  '--fields-background',
  '--switcher-background',
  '--burger-background',
];

const changeCssRootVariables = (theme: string) : void => {
  const root = document.querySelector<HTMLElement>(':root');

  variables.forEach((variableName: string) => {
    root.style.setProperty(variableName, `var(${variableName}-${theme})`);
  });
};

export default changeCssRootVariables;
