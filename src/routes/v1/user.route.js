const express = require("express");
const {userController} = require("../../controllers");

const router = express.Router();


// create user
router.post(
    "/create-user",
    userController.createUser
);

// get user list
router.get(
    "/list",
    userController.getUserList
);

// get user details by id
router.get(
    "/get-details/:userId",
    userController.getUserDetails
);

// update user
router.put(
    "/update-details/:userId",
    userController.updateDetails
);

// delete user
router.delete(
    "/delete-user/:userId",
    userController.deleteuser
);

module.exports = router;