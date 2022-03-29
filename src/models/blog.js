const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  featuredImage: String,
  body: {
    type: String,
    required: true,
  },
  mentions: [String],
  authors: {
    type: [String],
    required: true,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;