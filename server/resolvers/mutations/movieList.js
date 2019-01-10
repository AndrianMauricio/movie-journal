module.exports = {
  createMovieList: (_, args, { prisma }) => {
    return prisma.createMovieList({
      title: args.title,
      author: {
        connect: { id: args.userId },
      },
    });
  },
  updateMovieList: (_, args, { prisma }) => {
    const newData = {};

    if (args.newTitle) newData.title = args.newTitle;

    return prisma.updateMovieList({
      where: { id: args.listId },
      data: Object.assign({}, newData),
    });
  },
  deleteMovieList: (_, args, { prisma }) => {
    return prisma.deleteMovieList({ id: args.listId });
  },
  addMovieToList: (_, args, { prisma }) => {
    return prisma.updateMovieList({
      data: {
        movies: {
          connect: { id: args.movieId },
        },
      },
      where: { id: args.listId },
    });
  },
  removeMovieFromList: (_, args, { prisma }) => {
    return prisma.updateMovieList({
      data: {
        movies: {
          disconnect: {
            id: args.movieId,
          },
        },
      },
      where: {
        id: args.listId,
      },
    });
  },
};
