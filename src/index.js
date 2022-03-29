const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const models = require("./models/index");
const connectDb = require("./config/db");

connectDb();

const server = new ApolloServer({ typeDefs, resolvers, context: { models } });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
