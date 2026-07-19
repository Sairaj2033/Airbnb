module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "You must be logged in first!");
    return res.redirect("/signin");
  }
  next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
  const Review = require("./models/reviews");
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);

  if (!review.author.equals(req.user._id)) {
    req.flash("error", "You are not the author of this review!");
    return res.redirect(`/listings/${id}`);
  }

  next();
};
