export enum Validations {
  REQUIRED = 'required',
  REQUIRED_RATING = 'requiredRating',
  STRING = 'string',
  MIN_LENGTH = `minLength`,
  MAX_LENGTH = 'maxLength',
  VALIDATE_EMAIL = 'validateEmail'
}

const nameMinValue = '3';
const nameMaxValue = '15';
const titleMinValue = '4';
const titleMaxValue = '25';
const reviewMinValue = '7';
const reviewMaxValue = '250';

export const VALIDATORS_STRINGS = {
  rating: [Validations.REQUIRED_RATING],
  nickname: [
    Validations.REQUIRED,
    Validations.STRING,
    `${Validations.MIN_LENGTH}(${nameMinValue})`,
    `${Validations.MAX_LENGTH}(${nameMaxValue})`
  ],
  email: [Validations.REQUIRED, Validations.VALIDATE_EMAIL],
  reviewTitle: [
    Validations.REQUIRED,
    `${Validations.MIN_LENGTH}(${titleMinValue})`,
    `${Validations.MAX_LENGTH}(${titleMaxValue})`
  ],
  review: [
    Validations.REQUIRED,
    `${Validations.MIN_LENGTH}(${reviewMinValue})`,
    `${Validations.MAX_LENGTH}(${reviewMaxValue})`
  ]
};
