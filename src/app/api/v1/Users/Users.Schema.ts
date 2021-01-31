import joi from 'joi';

export const createUserRequestSchema = joi.object({
  userid   : joi.string().min(6).max(23),
  userPass : joi.string().min(6).max(32),
  sex      : joi.string().required(),
  birthdate: joi.date().required(),
});
