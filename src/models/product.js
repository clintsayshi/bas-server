const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },
  userId: {
    type: String,
  },
  images: [String],
  description: {
    type: String,
  },
  price: {
    type: Number, // mongoose doesn't support floats right away.
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
