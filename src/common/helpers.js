export const kelvinToCelsius = kelvin => {
  const celsius = kelvin - 273;
  return Number(celsius.toFixed(1));
};

export const groupQueryString = queryString => {
  // remove the ? from the beginning and split the string at &
  const separatedQueryStrings = queryString.slice(1, queryString.length).split('&');
  // make an object with key:value pairs for the url data
  const groupedQueryStrings = separatedQueryStrings.reduce((acc, query) => {
    const splitQuery = query.split('=');
    // place part before = as key and the one after as value
    acc[splitQuery[0]] = splitQuery[1];
    return acc;
  }, {});

  return groupedQueryStrings;
};
