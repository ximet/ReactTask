export function validateEmailField(value) {
  const validate = [];

  validate.push(checkValidateRequire(value));
  validate.push(checkValidateEmail(value));

  return getErrors(validate);
}

export function validateTextField(value) {
  const validate = [];

  validate.push(checkValidateRequire(value));

  return getErrors(validate);
}

function getErrors(validate) {
  let result;
  const errors = validate.filter(validate => validate !== undefined);
  if (errors.length > 0) result = errors.join(', ');

  return result;
}

function checkValidateEmail(value) {
  let error;
  const rule = '[a-z0-9]@.+[a-z0-9]+.[a-z]{2,4}';
  const regExp = new RegExp(rule, 'g');

  if (!regExp.test(value)) {
    error = 'Invalid email address';
  }

  return error;
}

function checkValidateRequire(value) {
  let error;
  if (!value) error = 'Required';

  return error;
}
