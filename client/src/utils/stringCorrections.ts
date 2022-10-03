export const isInputValid = (event: string): boolean => {
  return /(^[A-Za-z]\s{1}}[A-Za-z])*$/.test(event);
};

export const formatNameForUrl = (name: string): string => {
  return name.replace(/\s+/g, '');
};

export const separateCapitalizeName = (name: string): string => {
  return name.replace(/([a-z])([A-Z])/g, '$1 $2');
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
