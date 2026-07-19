const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listings.js");
const wrapAsync = require("../utils/wrapsync.js");
const listingController = require("../controllers/listing.js");

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })



// Middleware schema for lisitngs
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);

  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};


router.route("/")
.get(wrapAsync(listingController.index))  //index
// .post(validateListing, wrapAsync(listingController.createListing)); //create
.post(upload.single("listing[image]"),(req, res) => {
res.send(req.file);

})

/////////////// NEW ROUTE /////////////////////////
router.get("/new", listingController.renderNewForm);


router.route("/:id")
.get(wrapAsync(listingController.showListing)) ///show route
.put(validateListing, wrapAsync(listingController.updateListing)) //update route
.delete(wrapAsync(listingController.deleteListing));


/////////////////////EDIT////////////////////////
router.get("/:id/edit", wrapAsync(listingController.editListing));



module.exports = router;
