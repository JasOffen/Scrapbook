const { AuthenticationError } = require("apollo-server-express");
const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log(context)
      if (context.user) {
        console.log(context.user)
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      console.log(user)
      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
