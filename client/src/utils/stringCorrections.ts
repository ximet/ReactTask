export const isInputValid = event => {
  return /(^[A-Za-z]\s{1}}[A-Za-z])*$/.test(event);
};

export const formatNameForUrl = name => {
  return name.replace(/\s+/g, '');
};

export const resetLocationName = name => {
  return name.replace(/([a-z])([A-Z])/g, '$1 $2');
};
