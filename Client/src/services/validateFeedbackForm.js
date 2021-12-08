function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// function validateFeedbackForm(email, message) {
//   if (validateEmail(email) && message.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

const validateFeedbackForm = (email, message) => validateEmail(email) && message.length;

export { validateFeedbackForm };
