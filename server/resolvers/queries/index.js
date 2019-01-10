module.exports = {
  user: (_, args, { prisma }) => {
    return prisma.user({ id: args.userId });
  },
  isLoggedIn: (_, __, { req }) => {
    return typeof req.session.user !== "undefined";
  },
  /*users: (_, __, { prisma }) => {
    return prisma.users({});
  },*/
  movieList: (_, args, { prisma }) => {
    return prisma.movieList({ id: args.listId });
  },
  /*movieLists: (_, __, { prisma }) => {
    return prisma.movieLists({});
  },*/
  movie: (_, args, { prisma }) => {
    return prisma.movie({ id: args.movieId });
  },
  movies: (_, __, { prisma }) => {
    return prisma.movies({});
  },
};
