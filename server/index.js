if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}

const { GraphQLServer } = require("graphql-yoga");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const ms = require("ms");

const { prisma } = require("./generated/prisma-client");
const resolvers = require("./resolvers");

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  context: req => ({
    prisma,
    req: req.request,
    bcrypt,
  }),
});

// Middleware for setting cookies
server.express.use(
  session({
    name: "movie-journal",
    secret: process.env.SECRET_SESSION_KEY,
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: ms("7d"),
    },
  })
);

server.start(
  {
    endpoint: "/graphql",
    subscriptions: "/subscriptions",
    playground: "/playground",
    port: 4000,
    cors: {
      credentials: true,
      origin: ["http://localhost:3000", "https://localhost:3000"],
    },
  },
  () => console.log("Server is running on http://localhost:4000")
);
