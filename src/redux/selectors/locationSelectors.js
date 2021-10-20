export const getCityInfo = state => {
  const { name, country } = state.location.currentLocation;

  return { name, country };
};
