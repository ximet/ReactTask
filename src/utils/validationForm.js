export function validateEmailField(value) {
  const validations = [];

  validations.push(validateRequire(value));
  validations.push(validateEmail(value));

  return getErrors(validations);
}

export function validateTextField(value) {
  const validations = [];

  validations.push(validateRequire(value));

  return getErrors(validations);
}

function getErrors(validate) {
  let result;
  const errors = validate.filter(validate => validate !== undefined);
  if (errors.length > 0) result = errors.join(', ');

  return result;
}

function validateEmail(value) {
  let error;
  const rule = '[a-z0-9]@.+[a-z0-9]+.[a-z]{2,4}';
  const regExp = new RegExp(rule, 'g');

  if (!regExp.test(value)) {
    error = 'Invalid email address';
  }

  return error;
}

function validateRequire(value) {
  let error;
  if (!value) error = 'Required';

  return error;
}
