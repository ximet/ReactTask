const components = [
  '--main-bg',
  '--body-bg',
  '--text-color-active',
  '--text-color-primary',
  '--text-color-secondary',
  '--icon-filter',
  '--color-danger'
];

export function changeVariables(theme) {
  const root = document.querySelector(':root');
  
  components.forEach(component => {
    root.style.setProperty(`${component}-default`, `var(${component}-${theme})`);
  });
}
