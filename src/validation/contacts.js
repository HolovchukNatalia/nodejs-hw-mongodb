import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string()
    .pattern(/^\+380\d{9}$/)
    .message({
      'string.pattern.base': 'Phone number must be in the format +380XXXXXXXXX',
    })
    .required(),
  email: Joi.string().email().optional().allow(null),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('home', 'personal', 'work').required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string()
    .pattern(/^\+380\d{9}$/)
    .messages({
      'string.pattern.base': 'Phone number must be in the format +380XXXXXXXXX',
    }),
  email: Joi.string().email().optional().allow(null),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('home', 'personal', 'work'),
}).min(1);
