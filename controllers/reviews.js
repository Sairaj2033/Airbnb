 const Listing = require("../models/listings");
 const Review = require("../models/reviews")

module.exports.createReview = async (req,res) => {
      console.log("req.user =", req.user); 
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();

  req.flash("success", "Thanks for the Review!");
  
  res.redirect(`/listings/${listing._id}`);

}

module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;

    let review = await Review.findById(reviewId);

    if (!review.author.equals(req.user._id)) {
        req.flash("error", "You are not the author of this review!");
        return res.redirect(`/listings/${id}`);
    }

    await Listing.findByIdAndUpdate(id, {
        $pull: { reviews: reviewId }
    });

    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted Successfully");
    res.redirect(`/listings/${id}`);
};
