const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const Listing = require("./models/listings.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
//const wrapAsync = require("./utils/wrapsync.js");
const ExpressError = require("./utils/ExpressError.js")
//const {listingSchema, reviewSchema} = require("./schema.js");
// const Review = require("./models/reviews.js")
const reviews= require("./routes/review.js");
const listings = require("./routes/listing.js");
const cookieParser = require("cookie-parser");
/////////////////CONNECTION ///////////////////
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// connect DB
async function main() {
  await mongoose.connect(MONGO_URL);
}

// main()
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });



app.use(cookieParser("secretcode"));


app.get("/getsigncookie", (req, res) => {
  res.cookie("made_In","India", {signed: true});
  res.send("signed cookie sent");
});
 
app.get("/verify",(req,res) =>{
  console.log(req.signedCookies);
  res.send("verified");
})



  
//////////////////////////////////////////
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));





///cookie parser//////
app.get("/getcookies", (req,res) => {
  res.cookie("name", "namaste");
  res.cookie("user", "checkpoints");
  res.send("Cookies set");
});

app.get("/greet", (req,res) => {
 let { name = "anonymous" } = req.cookies;
  res.send(`Hi, ${name}`);
})

// root route
app.get("/", (req, res) => {
  console.dir(req.cookies);
  res.send("hi i am root ");
});





// // Middleware schema for lisitngs
// const validateListing = (req ,res, next) => {
//  let {error} = listingSchema.validate(req.body);
    
//       if(error) {
//         let errMsg = error.details.map((el) => el.message).join(",");
//         throw new ExpressError(400, errMsg);
//       } else {
//         next();
//       }
// }

// //Middleware schema foe reviews
// const validateReview = (req ,res, next) => {
//  let {error} = reviewSchema.validate(req.body);
    
//       if(error) {
//         let errMsg = error.details.map((el) => el.message).join(",");
//         throw new ExpressError(400, errMsg);
//       } else {
//         next();
//       }    
// }





// //////////////////////INDEX ROUTE //////////////////

// app.get("/listings", wrapAsync(async (req, res) => {
//   const allListings = await Listing.find({});
//   res.render("listings/index.ejs", { allListings });
// }));
// /////////////// NEW ROUTE /////////////////////////

// app.get("/listings/new", (req, res) => {
//   res.render("listings/new.ejs");
// });

// /////////////////////// SHOW ROUTE /////////////////////////

// app.get("/listings/:id", async (req, res) => {
//   let { id } = req.params;
//   const listing = await Listing.findById(id).populate("reviews");
//   res.render("listings/show.ejs", { listing });
// });

// ///////////////CREATE ROUTE//////////////////////////////
// app.post("/listings",
//   validateListing, 
//   wrapAsync( async (req, res ,next) => {
//       const  newListing = new Listing(req.body.listing);
//    await newListing.save();
//    res.redirect("/listings");
//   })
// );

// /////////////////////EDIT////////////////////////
// app.get("/listings/:id/edit", wrapAsync( async (req, res) => {
//   let { id } = req.params; ////extracting id
//   const listing = await Listing.findById(id);
//   res.render("listings/edit.ejs", { listing }); //explain this in detaild word by word consise but accurate
// }));

// //////////////////////////UPDATE///////////////////////
// app.put("/listings/:id", 
//   validateListing,
//   wrapAsync(async (req, res) => {
//   let { id } = req.params; //explain this in detaild word by word consise but accurate
//   await Listing.findByIdAndUpdate(id, { ...req.body.listing });
//   res.redirect(`/listings/${id}`); //explain this in detaild word by word consise but accurate
// }));

// ////////////////////DELETE ROUTE///////////////////

// app.delete("/listings/:id",  wrapAsync(async (req, res) => {
//   let { id } = req.params; //explain this in detaild word by word consise but accurate
//   let deletedListing = await Listing.findByIdAndDelete(id);
//   console.log(deletedListing);
//   res.redirect("/listings");
// }));

app.use("/listings", listings);
app.use("/listings/:id/reviews",reviews);

// /////////////// REVIEWS:POST ROUTE //////////////////////
// app.post("/listings/:id/reviews", validateReview, wrapAsync (async (req,res) => {
//   let listing = await Listing.findById(req.params.id);
//   let newReview = new Review(req.body.review);

//   listing.reviews.push(newReview);

//   await newReview.save();
//   await listing.save();


//   res.redirect(`/listings/${listing._id}`);

// }));


// ///////////////////Reviews: Delete Route////////////////////////
// app.delete("/listings/:id/reviews/:reviewId", wrapAsync(async (req, res) => {
//   let {id, reviewId} = req.params;
//   await Listing.findByIdAndUpdate(id, {$pull:{reviews: reviewId}});
//   await Review.findByIdAndDelete(reviewId);
//   res.redirect(`listings/${id}`);
// })
// );




// ////////////////test route to insert one listing////////////////////
// app.get("/testlisting", async (req, res) => {
//   let samplelisting = new Listing({
//     title: "my home",
//     description: "by the beach",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India",
//   });

//   await samplelisting.save(); // save to DB
//   console.log("sample was saved");

//   res.send("successful testing");
// });
 
app.all(/(.*)/, (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});
 
app.use((err, req, res, next) => {
  let{ statusCode = 500, message = "Something went wrong!"} = err;
  res.status(statusCode).render("error.ejs", {message});
 // res.status(statusCode).send(message);
});

/////////////////////////////////// start server/////////////////////
app.listen(8080, () => {
  console.log("server is listening on port 8080");
});

//explain what isi boilerplate in short
// als expalain why we need to wrap the route vs not wraped also whaats diff  between wrapAsync vs async vs tryy and err