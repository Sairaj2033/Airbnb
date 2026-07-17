const express = require("express");
const router = express.Router({mergeParams: true});
const User = require("../models/User.js")
const wrapAsync = require("../utils/wrapsync");
const passport = require("passport");

router.get("/signup", (req,res) => {
    res.render("users/signup.ejs"); 
});

router.post("/signup", wrapAsync( async(req,res) => {
    try {
           let {username ,email ,password} = req.body;
     const newUser = new User({email, username});
     const registeredUser = await User.register(newUser,password);
     console.log(registeredUser);
     req.flash("success", "Welcome to Airbnb!");
     res.redirect("/listings");
    }
  catch (e) {
   req.flash("error", e.message);
   res.redirect("/signup");
  }
}));

router.get("/signin", (req,res) =>  {
 res.render("users/signin.ejs")
 
})

router.post("/signin",passport.authenticate("local", {failureRedirect : '/signin', failureFlash: true}),
 async(req,res) => {
 req.flash("success","Welcome to Airbnb!");
 
 res.redirect("/listings");
});

module.exports = router;