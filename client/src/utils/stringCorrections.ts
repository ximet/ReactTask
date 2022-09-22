export const isInputValid = (event: string): boolean => {
  return /(^[A-Za-z]\s{1}}[A-Za-z])*$/.test(event);
};

export const formatNameForUrl = (name: string): string => {
  return name.replace(/\s+/g, '');
};

export const separateCapitalizeName = (name: string): string => {
  return name.replace(/([a-z])([A-Z])/g, '$1 $2');
};

export const makeRequiredLabel = (label: string | undefined): string => {
  const divideByWord = label ? separateCapitalizeName(label) : undefined;
  const capitalizeWords = divideByWord?.replace(/(^\w|\s\w)/g, m => {
    return m.toUpperCase();
  });
  return `* ${capitalizeWords}`;
};
