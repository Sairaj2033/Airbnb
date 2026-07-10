const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listings.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate")


 /////////////////CONNECTION ///////////////////
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// connect DB
async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });


//////////////////////////////////////////
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate );
app.use(express.static(path.join(__dirname, "/public")));


// root route
app.get("/", (req, res) => {
  res.send("hi i am root ");
});



//////////////////////INDEX ROUTE //////////////////

app.get("/listings", async (req, res) => {
 const allListings = await Listing.find({});
  res.render("listings/index.ejs",{ allListings });   
});
/////////////// NEW ROUTE /////////////////////////

app.get("/listings/new", (req, res) => {
   res.render("listings/new.ejs");
});

/////////////////////// SHOW ROUTE /////////////////////////

app.get("/listings/:id", async (req, res) => {
  let {id} = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs",{listing});
})

///////////////CREATE ROUTE//////////////////////////////
app.post("/listings", async (req, res) => { 
  const newListing =  new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
});

/////////////////////EDIT////////////////////////
app.get("/listings/:id/edit", async (req, res)=> {
    let {id} = req.params; ////extracting id  
  const listing = await Listing.findById(id);
 res.render("listings/edit.ejs", { listing });//explain this in detaild word by word consise but accurate 
});

//////////////////////////UPDATE///////////////////////
app.put("/listings/:id",async(req, res) => {
    let {id} = req.params;  //explain this in detaild word by word consise but accurate 
   await Listing.findByIdAndUpdate(id, {...req.body.listing});
   res.redirect(`/listings/${id}`);//explain this in detaild word by word consise but accurate 
});

////////////////////DELETE ROUTE///////////////////

app.delete("/listings/:id", async (req, res) => {
   let {id} = req.params; //explain this in detaild word by word consise but accurate 
   let deletedListing = await Listing.findByIdAndDelete(id);
   console.log(deletedListing);
   res.redirect("/listings");
})






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






/////////////////////////////////// start server/////////////////////
app.listen(8080, () => {
  console.log("server is listening on port 8080");
});



//explain what isi boilerplate in short