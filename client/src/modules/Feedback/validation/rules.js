import Joi from 'joi';
const errorMessages = {
  'string.empty': `This field cannot be an empty`,
  'string.min': `This field should have a minimum length of {#limit}`,
  'string.max': `This field should have a minimum length of {#limit}`,
  'string.email': 'Type a valid e-mail'
};

export const validation_rules = {
  name: Joi.object({
    name: Joi.string().min(2).max(20).required().messages(errorMessages)
  }),
  phone: Joi.object({
    phone: Joi.string().min(8).max(20).required().messages(errorMessages)
  }),
  email: Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages(errorMessages)
  }),
  message: Joi.object({
    message: Joi.string().required().messages(errorMessages)
  }),
  form: Joi.object({
    name: Joi.string().required().messages(errorMessages),
    phone: Joi.string().required().messages(errorMessages),
    email: Joi.string().required().messages(errorMessages),
    message: Joi.string().required().messages(errorMessages)
  }).options({ abortEarly: false })
};
