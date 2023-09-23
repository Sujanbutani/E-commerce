const joi = require("joi")

// create user
const createuser = {
    body : joi.object().keys({
        frist_name : joi.string().required().trim(),
        last_name : joi.string().required().trim(),
        email : joi.string().required().trim(),
        password : joi.string().required().trim()
    }),
};

module.exports = {
    createuser
}