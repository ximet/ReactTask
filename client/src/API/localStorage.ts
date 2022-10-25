import { Feedback } from 'types';

export const getFromStorage = (name: string): any => {
  const valueStr = localStorage.getItem(name);
  return !valueStr ? null : JSON.parse(valueStr);
};

export const setInStorage = (name: string, value: Feedback[]): void => {
  const valueStr = JSON.stringify(value);
  localStorage.setItem(name, valueStr);
};

export const removeFromStorage = (name: string): void => {
  localStorage.removeItem(name);
};
