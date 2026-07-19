const express = require("express");
const router = express.Router({ mergeParams: true });
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const wrapAsync = require("../utils/wrapsync.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listings.js");
const { createReview } = require("../controllers/reviews.js");
const reviewController = require("../controllers/reviews.js");
const { isLoggedIn, isReviewAuthor } = require("../middleware");

//Middleware schema foe reviews
const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);

  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

/////////////// REVIEWS:POST ROUTE //////////////////////
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

///////////////////Reviews: Delete Route////////////////////////
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview),
);

module.exports = router;
