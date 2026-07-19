const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/User.js");
const wrapAsync = require("../utils/wrapsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../controllers/user.js");

const userController = require("../controllers/user.js");

router.route("/signup")
.get( (req, res) => {
  res.render("users/signup.ejs");
})
.post( wrapAsync(userController.Signup));



router.route("/signin")
.get( userController.SigninForm)
.post(passport.authenticate("local", {
    failureRedirect: "/signin",
    failureFlash: true,
  }),
  userController.Signin,
);







router.get("/logout", userController.logout);

module.exports = router;
