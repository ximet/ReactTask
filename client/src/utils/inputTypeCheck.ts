import React from 'react';

export const checkIfTypeIsTextArea = (type: React.HTMLInputTypeAttribute): boolean => {
  return !!(type === 'textarea');
};

export const checkIfTypeIsNotHidden = (type: React.HTMLInputTypeAttribute): boolean => {
  return !!(type !== 'hidden');
};
