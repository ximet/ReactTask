export const convertToFahrenheit = (tempInCelsius: number) => {
  return Math.round((tempInCelsius * 9) / 5 + 32);
};
