import { Feedback } from 'types';

export const getFromStorage = (name: string): Feedback[] | null => {
  const valueStr = localStorage.getItem(name);
  if (valueStr === null) {
    return null;
  }
  return JSON.parse(valueStr);
};

export const setInStorage = (name: string, value: Feedback[]): void => {
  const valueStr = JSON.stringify(value);
  localStorage.setItem(name, valueStr);
};

export const removeFromStorage = (name: string): void => {
  localStorage.removeItem(name);
};
