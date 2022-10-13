import { InputValidator } from 'types';

import { capitalize } from 'utils/helpers';

export const BASE_URL = 'http://localhost:3000';

export const VALIDATOR: Record<
  InputValidator,
  (inputValue: string, ruleValue: number | boolean) => boolean
> = {
  [InputValidator.required]: inputValue => inputValue.length !== 0,
  [InputValidator.minLength]: (inputValue, ruleValue) => inputValue.length >= ruleValue,
  [InputValidator.maxLength]: (inputValue, ruleValue) => inputValue.length <= ruleValue
};

export const VALIDATION_ERRORS: Record<
  InputValidator,
  (inputName: string, ruleValue: number | boolean) => string
> = {
  [InputValidator.required]: inputName => `${capitalize(inputName)} cannot be empty.`,
  [InputValidator.minLength]: (inputName, ruleValue) =>
    `${capitalize(inputName)} must be at least ${ruleValue} characters long.`,
  [InputValidator.maxLength]: (inputName, ruleValue) =>
    `${capitalize(inputName)} must be less than ${ruleValue} characters long.`
};

export const STORE_STATE_LS_LABEL = 'state';

export const STAR_RATING_OPTIONS = {
  'rating-1': 1,
  'rating-2': 2,
  'rating-3': 3,
  'rating-4': 4,
  'rating-5': 5
};
