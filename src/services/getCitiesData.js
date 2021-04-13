import getData from './getData';

export default async function getCitiesData(inputValue) {
  let citiesData;

  try {
    const { locations } = await getData(`/location/search/${inputValue}`);

    citiesData = locations.map(city => {
      return {
        name: `${city.name.toLowerCase()}`,
        country: `${city.country.toLowerCase()}`,
        id: city.id
      };
    });
  } catch (error) {
    console.log(error);
  }
  return citiesData;
}
