const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/ExpressError.js")
const {listingSchema, reviewSchema} = require("../schema.js");
const Listing = require("../models/listings.js");
const wrapAsync = require("../utils/wrapsync.js");

// Middleware schema for lisitngs
const validateListing = (req ,res, next) => {
 let {error} = listingSchema.validate(req.body);
    
      if(error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
      } else {
        next();
      }
}




/////////////////////INDEX ROUTE //////////////////

router.get("/", wrapAsync(async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
}));
/////////////// NEW ROUTE /////////////////////////

router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

/////////////////////// SHOW ROUTE /////////////////////////

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate("reviews");
  res.render("listings/show.ejs", { listing });
});

//////////////CREATE ROUTE//////////////////////////////
router.post("/",
  validateListing, 
  wrapAsync( async (req, res ,next) => {
      const  newListing = new Listing(req.body.listing);
   await newListing.save();
   res.redirect("/listings");
  })
);


/////////////////////EDIT////////////////////////
router.get("/:id/edit", wrapAsync( async (req, res) => {
  let { id } = req.params; ////extracting id
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing }); //explain this in detaild word by word consise but accurate
}));

//////////////////////////UPDATE///////////////////////
router.put("/:id", 
  validateListing,
  wrapAsync(async (req, res) => {
  let { id } = req.params; //explain this in detaild word by word consise but accurate
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`); //explain this in detaild word by word consise but accurate
}));

////////////////////DELETE ROUTE///////////////////

router.delete("/:id",  wrapAsync(async (req, res) => {
  let { id } = req.params; //explain this in detaild word by word consise but accurate
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
}));



module.exports = router;








