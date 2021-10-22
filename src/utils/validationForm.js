export function validateEmailField(value) {
  let error;
  const rule = '[a-z0-9]@.+[a-z0-9]+.[a-z]{2,4}';
  const regExp = new RegExp(rule, 'g');

  if (!value) {
    error = 'Required';
  } else if (!regExp.test(value)) {
    error = 'Invalid email address';
  }

  return error;
}

export function validateTextField(value) {
  let error;
  if (!value) error = 'Required';

  return error;
}
