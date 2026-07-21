const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listings.js");
const wrapAsync = require("../utils/wrapsync.js");
const listingController = require("../controllers/listing.js");

const {storage} = require("../CloudConfig.js")
const multer  = require('multer');
const { isLoggedIn } = require("../middleware.js");
const upload = multer({storage})



// Middleware schema for lisitngs
const validateListing = (req, res, next) => {
  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  let { error } = listingSchema.validate(req.body);

  if (error) {
    console.log(error.details);
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }

  next();
};


router.route("/")
.get(wrapAsync(listingController.index))  //index
.post(isLoggedIn,upload.single("listing[image]"), validateListing, wrapAsync(listingController.createListing)); //create
// .post(,(req, res) => {
// res.send(req.file);

// })

/////////////// NEW ROUTE /////////////////////////
router.get("/new",isLoggedIn, listingController.renderNewForm);



router.route("/:id")
///show route
.get(wrapAsync(listingController.showListing)) 
//update  route(location map)
.put(isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(listingController.updateListing)) 
//delete route 
.delete(wrapAsync(listingController.deleteListing));


/////////////////////EDIT////////////////////////
router.get("/:id/edit", wrapAsync(listingController.editListing));



module.exports = router;
