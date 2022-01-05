const { AuthenticationError } = require("apollo-server-express");
const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parents, args, context) => {
      // if they is a tekn
      if (context.user) {
        return await User.findOne({ _id: context.user._id }).select(
          "-password"
        );
      }
      throw new AuthenticationError("You're logged in");
    },
  },
  Mutation: {
    addUser: async (parent, args, context) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { user, token };
    },
    login: async (parent, { email, password }, context) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError("Cannot find user");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError("Is not correct password");
      }
      const token = signToken(user);
      return { user, token };
    },
    saveBook: async(parent, { bookData }, context),
  },
};

module.exports = resolvers;
