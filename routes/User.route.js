const express = require("express");
const route = express.Router();

//const UserController = require("../controllers/user.controller");
const { verifyAccessToken } = require("../helpers/jwt_service");

route.post("/register", UserController.register);

route.post("/login", UserController.logIn);

route.delete("/logout", UserController.logOut);

route.post("/refresh-token", UserController.refreshToken);

route.get("/lists", verifyAccessToken, UserController.lists);

module.exports = route;
