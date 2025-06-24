import Joi from 'joi';

export const createContactShema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string()
    .pattern(/^\+380\d{9}$/)
    .message({
      'string.pattern.base': 'Phone number must be in the format +380XXXXXXXXX',
    })
    .required(),
  email: Joi.string().email().optional().allow(null),
  isFavorite: Joi.boolean(),
  contactType: Joi.string().valid('home', 'personal', 'work').required(),
});

export const updateContactShema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string()
    .pattern(/^\+380\d{9}$/)
    .messages({
      'string.pattern.base': 'Phone number must be in the format +380XXXXXXXXX',
    }),
  email: Joi.string().email().optional().allow(null),
  isFavorite: Joi.boolean(),
  contactType: Joi.string().valid('home', 'personal', 'work'),
}).min(1);
