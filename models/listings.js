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
    url:String,
    filename: String,
   },

  price: Number,

  location: String,
  country: String,
  reviews : [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    }
  ],

  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
  lat: Number,
  lon: Number,
},
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
