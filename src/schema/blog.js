const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    "Return all products"
    allBlogs: [Blog!]!
    "Return a product by ID"
    blog(blogId: ID!): Blog!
  }

  type Mutation {
    "Create a blog article"
    createBlog(blogInput: CreateBlogInput!): Blog!
    #updateProduct(id:ID!, input:UpdateProductInput!): UpdateProductResponse!
  }

  input CreateBlogInput {
    "The title of the article"
    title: String!
    "Featured image"
    featuredImage: String
    "The body of the blog possibly in markdown"
    body: String!
    "The user's products that are mentioned or talked about on the article"
    mentions: [ID!]
    "The writer(s) behind the artitle"
    authors: [ID!]
  }

  """
  Object returned after creating a product
  """
  type CreateBlogResponse {
    "Status code to tell how product creation went"
    code: Int!
    "True if mutation was successful"
    success: Boolean!
    "Clear message of how the operation went"
    message: String!
    "The actual blog being mutated(crud)"
    blog: Blog
  }

  type Blog {
    id: ID!
    "The title of the article"
    title: String!
    "Featured image"
    featuredImage: String
    "The body of the blog possibly in markdown"
    body: String!
    "The user's products that are mentioned or talked about on the article"
    mentions: [ID!]
    "The writer(s) behind the artitle"
    authors: [ID!]
  }

  type Author {
    id: ID!
    "Full names of the author"
    name: String
    "A photo of the author"
    photo: String
  }
`;
