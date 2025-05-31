const { logIn, singUp } = require("../controllers/userController");

const express = require("express");
const userRouter = express.Router();

userRouter.post('./login', logIn);
userRouter.post('./singup', singUp);

module.exports = userRouter;

