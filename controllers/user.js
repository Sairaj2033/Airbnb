const User = require("../models/User");

module.exports.Signupform = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.Signup = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;

    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);

    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }

      req.flash("success", "Welcome to Airbnb!");
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

module.exports.SigninForm = (req, res) => {
  res.render("users/signin.ejs");
};

module.exports.Signin = async (req, res) => {
  console.log("Logged in user:", req.user);

  req.flash("success", "Welcome to Airbnb!");
  res.redirect("/listings");
};

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "Successfully Logged out!");
    res.redirect("/listings");
  });
};
//
