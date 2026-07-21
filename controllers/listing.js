const Listing = require("../models/listings");
const getCoordinates = require("../utils/geocode");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
}

module.exports.renderNewForm = (req,res) => {
  
  res.render("listings/new.ejs");
};

module.exports.showListing =  async (req, res) => {
  let { id } = req.params;
 const listing = await Listing.findById(id)
 .populate("owner")
 .populate({  
   path: "reviews",
    populate: {
        path: "author",
    }
    
});
   if(!listing) {
    req.flash("error", "Listing Does not exists");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", {
  listing,
  mapKey: process.env.MAP_TILER,
});
 
}

module.exports.createListing =  async (req, res ,next) => {
   let url = req.file.path;
   let filename = req.file.filename;
   
   const  newListing = new Listing(req.body.listing);
//map
const place = `${newListing.location}, ${newListing.country}`;

const coordinates = await getCoordinates(place);

console.log("Coordinates:", coordinates); // <-- ADD THIS LINE

if (coordinates) {
  newListing.geometry = coordinates;
}

//map//


//save

   newListing.owner = req.user._id;

   newListing.image = {url, filename};
   await newListing.save();
   req.flash("success", "New Listing Created Successfully!");
   res.redirect("/listings");
  }

module.exports.editListing = async (req, res) => {
  let { id } = req.params; ////extracting id
  const listing = await Listing.findById(id);
   if(!listing) {
    req.flash("error", "Listing Does not exists");
    return res.redirect("/listings");
  }
   let OrignalImageUrl =  listing.image.url;
   OrignalImageUrl =  OrignalImageUrl.replace("/upload","/upload/h_300,w_250");
  res.render("listings/edit.ejs", { listing, OrignalImageUrl }); //explain this in detaild word by word consise but accurate
}


module.exports.updateListing= async (req, res) => {
   
  let { id } = req.params; //explain this in detaild word by word consise but accurate
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  ////map
  // map
  const place = `${req.body.listing.location}, ${req.body.listing.country}`;
  const coordinates = await getCoordinates(place);
  
  if (coordinates) {
    listing.geometry = coordinates;
    await listing.save();
  }
  // map
  //////

  if(typeof req.file !=="undefined") {
       let url = req.file.path;
       let filename = req.file.filename;
       listing.image = {url, filename};
       await listing.save(); 
  }
  
     req.flash("success", "Listing Updated Successfully!");
  
  res.redirect(`/listings/${id}`); //explain this in detaild word by word consise but accurate

  

  
  
  }


module.exports.deleteListing = async (req, res) => {
  let { id } = req.params; //explain this in detaild word by word consise but accurate
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing Deleted Successfully");
  res.redirect("/listings");
}

