const user = require("./user");
const movieList = require("./movieList");
const movie = require("./movie");

module.exports = Object.assign({}, user, movieList, movie);
