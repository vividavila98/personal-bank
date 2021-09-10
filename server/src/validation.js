import Joi from "joi";

// Register validation
export const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().max(100).required(),
        email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'edu'] } }),
        password: Joi.string().min(6).required()
    });
    
    return schema.validate(data);
};

// Login validation
export const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'edu'] } }),
        password: Joi.string().min(6).required()
    });
    
    return schema.validate(data);
};