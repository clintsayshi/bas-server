const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    "Return all products"
    allProducts: [Product!]!
    "Return a product by ID"
    product(productId: ID!): Product!
  }

  type Mutation {
    "Create a product"
    createProduct(productInput: CreateProductInput!): CreateProductResponse!
    #updateProduct(id:ID!, input:UpdateProductInput!): UpdateProductResponse!
  }

  input CreateProductInput {
    "The name of the product"
    title: String!
    "The ID of the user creating the product"
    userId: ID!
    "All the information about the product that customers should know"
    description: String
    "An array of the product images"
    images: [String!]
    "The price of the product in Rands(for now)"
    price: Float!
  }
  """
  Object returned after creating a product
  """
  type CreateProductResponse {
    "Status code to tell how product creation went"
    code: Int!
    "True if mutation was successful"
    success: Boolean!
    "Clear message of how the operation went"
    message: String!
    "The actual product being mutated(crud)"
    product: Product
  }
  """
  Object returned after updating a product
  """
  type UpdateProductResponse {
    "Status code to tell how product update went"
    code: Int!
    "True if mutation was successful"
    success: Boolean!
    "Clear message of how the operation went"
    message: String!
    "The actual product being mutated(crud)"
    product: Product
  }

  type Product {
    id: ID!
    "The ID of the owner of the product"
    userId: ID!
    "The name of the product"
    title: String!
    "An array of the product images"
    images: [String!]
    "All the information about the product that customers should know"
    description: String
    "The price of the product in Rands(for now)"
    price: Float!
  }
`;
