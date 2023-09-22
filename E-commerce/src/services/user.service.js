const { User } = require("../models");

// create user
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

//  Get user list
const getUserList = async (req, res) => {
  return User.find({$or:[{is_active:true}]})
};

const getUserById = async (userId) => {
  return User.findById(userId);
};

const updateDetails = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};

const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

// delete user
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};

const deleteUserByEmail = async (email) => {
  return User.findOneAndDelete({ email: email });
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateDetails,
  deleteUser,
  deleteUserByEmail,
  getUserByEmail
};