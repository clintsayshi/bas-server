const resolvers = {
  Query: {
    allProducts: async (_, __, { models }) => {
      return await models.Product.find();
    },
    product: async (_, { id }, { models }) => {
      return await models.Product.findOne(id);
    },
    allBlogs: async (_, __, { models }) => {
      return await models.Blog.find();
    },
    blog: async (_, { id }, { models }) => {
      return await models.Blog.findOne(id);
    },
  },
  Mutation: {
    createProduct: async (_, { productInput }, { models }) => {
      try {
        const product = await models.Product.create(productInput);

        return {
          code: 200,
          success: true,
          message: `${product.userId} created a new product successfully`,
          product,
        };
      } catch (error) {
        return {
          code: error.extensions.response.status,
          success: false,
          message: error.extensions.response.body,
          product: null,
        };
      }
    },
    createBlog: async (_, { blogInput }, { models }) => {
      return await models.Blog.create(blogInput);
    },
  },
};

module.exports = resolvers;
