export enum Validations {
  REQUIRED = 'required',
  REQUIRED_RATING = 'requiredRating',
  STRING = 'string',
  MIN_LENGTH = `minLength`,
  MAX_LENGTH = 'maxLength',
  VALIDATE_EMAIL = 'validateEmail'
}

const nameMinValue = 3;
const nameMaxValue = 15;
const titleMinValue = 4;
const titleMaxValue = 25;
const reviewMinValue = 7;
const reviewMaxValue = 250;

export const VALIDATORS_STRINGS = {
  rating: [{ valName: Validations.REQUIRED_RATING }],
  nickname: [
    { valName: Validations.REQUIRED },
    { valName: Validations.STRING },
    { valName: Validations.MIN_LENGTH, param: nameMinValue },
    { valName: Validations.MAX_LENGTH, param: nameMaxValue }
  ],
  email: [{ valName: Validations.REQUIRED }, { valName: Validations.VALIDATE_EMAIL }],
  reviewTitle: [
    { valName: Validations.REQUIRED },
    { valName: Validations.MIN_LENGTH, param: titleMinValue },
    { valName: Validations.MAX_LENGTH, param: titleMaxValue }
  ],
  review: [
    { valName: Validations.REQUIRED },
    { valName: Validations.MIN_LENGTH, param: reviewMinValue },
    { valName: Validations.MAX_LENGTH, param: reviewMaxValue }
  ]
};
