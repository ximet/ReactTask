const CitiesList = props => {
  const citiesListShow = props.citiesList.map(item => {
    return <City currentWeather={currentWeather} />;
  });
  return citiesListShow;
};

export default CitiesList;
