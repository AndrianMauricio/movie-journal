const Queries = require("./queries");
const Mutations = require("./mutations");

module.exports = {
  Query: Queries,
  Mutation: Mutations,
  User: {
    movieLists: (root, _, { prisma }) => {
      return prisma
        .user({
          id: root.id,
        })
        .movieLists();
    },
  },
  MovieList: {
    author: (root, _, { prisma }) => {
      return prisma
        .movieList({
          id: root.id,
        })
        .author();
    },
    movies: (root, _, { prisma }) => {
      return prisma
        .movieList({
          id: root.id,
        })
        .movies();
    },
  },
};
