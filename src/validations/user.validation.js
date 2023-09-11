const joi = require("joi")

// user create
const createuser = {
    body : joi.object().keys({
        user_name : joi.string().required().trim(),
    email : joi.string().required().trim(),
    password : joi.string().required().trim(),
    }),
};

module.exports = {
    createuser
};