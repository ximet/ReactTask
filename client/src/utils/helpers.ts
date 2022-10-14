import { KeyboardEvent } from 'react';

export const capitalize = (string?: string): string =>
  `${string && string[0].toUpperCase()}${string?.slice(1)}`;

export const getWeatherSymbol = (symbol?: string): string =>
  `https://developer.foreca.com/static/images/symbols/${symbol}.png`;

export const throttle = (callback: any, limit: number) => {
  let wait = false;
  return () => {
    if (!wait) {
      callback.call();
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
    }
  };
};

export const checkIfEnterOrSpacePressed = <T>(e: KeyboardEvent<T>): boolean =>
  e.key === 'Enter' || e.code === 'Space';
