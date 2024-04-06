const Joi = require('joi');

const UserPayloadSchema = Joi.object({
  username: Joi.string().required(),
  // username: Joi.string().alphanum().regex(/^[a-zA-Z0-9]*$/, 'alpha-numeric').required(),
  password: Joi.string().required(),
  fullname: Joi.string().required(),
});

module.exports = { UserPayloadSchema };
