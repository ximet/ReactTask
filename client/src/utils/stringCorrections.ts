export const isInputValid = (event: string): boolean => {
  return /(^[A-Za-z]\s{1}}[A-Za-z])*$/.test(event);
};

export const formatNameForUrl = (name: string): string => {
  return name.replace(/\s+/g, '');
};

export const separateCapitalizeName = (name: string): string => {
  return name.replace(/([a-z])([A-Z])/g, '$1 $2');
};

export const extractLocationName = (name: string): string => {
  const namePart = name.split('-')[0];
  return namePart.replace(/([a-z])([A-Z])/g, '$1 $2');
};

export const capitalizeFirstLetter = (name: string): string => {
  const capitalizedName = name.substring(0, 1).toUpperCase() + name.substring(1);
  return separateCapitalizeName(capitalizedName);
};

export const makeRequiredLabel = (label: string | undefined): string => {
  const divideByWord = label ? separateCapitalizeName(label) : undefined;
  const capitalizeWords = divideByWord?.replace(/(^\w|\s\w)/g, item => {
    return item.toUpperCase();
  });
  return `* ${capitalizeWords}`;
};

export const convertStringCharacters = phrase => {
  let returnString = phrase;
  returnString = returnString.replace(/š/g, 's');
  returnString = returnString.replace(/Š/g, 'S');
  returnString = returnString.replace(/ū/g, 'u');
  returnString = returnString.replace(/Ū/g, 'U');
  returnString = returnString.replace(/ų/g, 'u');
  returnString = returnString.replace(/ę/g, 'e');
  returnString = returnString.replace(/ė/g, 'e');
  returnString = returnString.replace(/Ė/g, 'E');
  returnString = returnString.replace(/ą/g, 'a');
  returnString = returnString.replace(/į/g, 'i');
  returnString = returnString.replace(/č/g, 'c');
  returnString = returnString.replace(/Č/g, 'C');

  returnString = returnString.replace(/\s/g, '-');

  return returnString;
};
