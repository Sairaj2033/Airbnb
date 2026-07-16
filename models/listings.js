const mongoose = require("mongoose");
const Review = require("./reviews.js");

// shortcut for Schema
const Schema = mongoose.Schema;

// define structure of document
const listingSchema = new Schema({
  title: {
    type: String,
    required: true, // must be provided
  },

  description: String,

  image: {
    type: String,

    // default image if not provided
    default:
      "https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg",

    // custom setter
    set: (v) =>
      v === ""
        ? "https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg"
        : v,
  },

  price: Number,

  location: String,
  country: String,
  reviews : [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    }
  ]
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if(listing) {
      await Review.deleteMany({_id : {$in: listing.reviews}});
 
  }
})



// create model (collection = listings)
const Listing = mongoose.model("Listing", listingSchema);
// export model
module.exports = Listing;
