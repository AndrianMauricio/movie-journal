module.exports = {
  createMovie: (_, args, { prisma }) => {
    return prisma.createMovie({
      title: args.title,
    });
  },
  updateMovie: (_, args, { prisma }) => {
    const newData = {};

    if (args.newTitle) newData.title = args.newTitle;

    return prisma.updateMovie({
      where: { id: args.movieId },
      data: Object.assign({}, newData),
    });
  },
  deleteMovie: (_, args, { prisma }) => {
    return prisma.deleteMovie({ id: args.movieId });
  },
};
