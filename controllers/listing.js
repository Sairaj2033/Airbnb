const Listing = require("../models/listings");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
}

module.exports.renderNewForm = (req,res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing =  async (req, res) => {
  let { id } = req.params;
 const listing = await Listing.findById(id).populate({
    path: "reviews",
    populate: {
        path: "author",
    },
});
   if(!listing) {
    req.flash("error", "Listing Does not exists");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
 
}

module.exports.createListing =  async (req, res ,next) => {
   const  newListing = new Listing(req.body.listing);
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
  res.render("listings/edit.ejs", { listing }); //explain this in detaild word by word consise but accurate
}


module.exports.updateListing= async (req, res) => {
  let { id } = req.params; //explain this in detaild word by word consise but accurate
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
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

