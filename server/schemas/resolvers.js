const { AuthenticationError } = require("apollo-server-express");
const { User, Book } = require("../models");
// const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    saveBook: async () => {
      return Book.find();
    },
  },
};

module.exports = resolvers;
