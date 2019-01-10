module.exports = {
  signUp: async (_, { email, password, name }, { prisma, bcrypt }) => {
    const user = await prisma.user({ email });

    if (user) {
      throw new Error(
        "The email provided is already being used by another user."
      );
    } else {
      const pwd = await bcrypt.hash(password, bcrypt.genSaltSync(10));

      const user = await prisma.createUser({ email, name, password: pwd });

      return user.email;
    }
  },
  logIn: async (_, { email, password }, { prisma, req, bcrypt }) => {
    const user = await prisma.user({ email });

    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        req.session.user = {
          id: user.id,
          name: user.name,
        };

        return user.name;
      } else {
        throw new Error("Incorrect password.");
      }
    } else {
      throw new Error("No such user exists.");
    }
  },
  logOut: async (_, { id }, { req }) => {
    if (req.session.user && req.session.user.id === id) {
      req.session.user = undefined;

      return true;
    }

    return false;
  },
  deleteUser: async (_, { userId, password }, { prisma, bcrypt }) => {
    const user = await prisma.user({ id: userId });

    if (user) {
      if (await bcrypt(password, user.password)) {
        return prisma.deleteUser({
          id: args.userId,
        });
      } else {
        throw new Error("Incorrect password.");
      }
    } else {
      throw new Error("User not found.");
    }
  },
};
