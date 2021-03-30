export const kelvinToCelsius = kelvin => {
  const celsius = kelvin - 273;
  return Number(celsius.toFixed(1));
};
