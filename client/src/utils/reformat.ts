export const getName = (object: object): string => {
  return JSON.parse(JSON.stringify([...Object.keys(object)]).replace(/[[\]']+/g, ''));
};
export const getValue = (object: object): string => {
  return JSON.parse(JSON.stringify([...Object.values(object)]).replace(/[[\]']+/g, ''));
};
