import { InputValidator } from 'types';

import { capitalize } from 'utils/helpers';

export const BASE_URL = 'http://localhost:3000';

export const VALIDATOR: Record<string, (value: string, param: number | boolean) => boolean> = {
  [InputValidator.required]: value => value.length !== 0,
  [InputValidator.minLength]: (value, param) => value.length >= param,
  [InputValidator.maxLength]: (value, param) => value.length <= param
};

export const VALIDATION_ERRORS: Record<
  string,
  (field: string, param: number | boolean) => string
> = {
  [InputValidator.required]: field => `${capitalize(field)} cannot be empty.`,
  [InputValidator.minLength]: (field, param) =>
    `${capitalize(field)} must be at least ${param} characters long.`,
  [InputValidator.maxLength]: (field, param) =>
    `${capitalize(field)} must be less than ${param} characters long.`
};
