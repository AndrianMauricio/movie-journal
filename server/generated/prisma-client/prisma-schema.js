module.exports = {
        typeDefs: /* GraphQL */ `type AggregateMovie {
  count: Int!
}

type AggregateMovieList {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Movie {
  id: ID!
  title: String!
}

type MovieConnection {
  pageInfo: PageInfo!
  edges: [MovieEdge]!
  aggregate: AggregateMovie!
}

input MovieCreateInput {
  title: String!
}

input MovieCreateManyInput {
  create: [MovieCreateInput!]
  connect: [MovieWhereUniqueInput!]
}

type MovieEdge {
  node: Movie!
  cursor: String!
}

type MovieList {
  id: ID!
  title: String!
  author: User!
  movies(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Movie!]
}

type MovieListConnection {
  pageInfo: PageInfo!
  edges: [MovieListEdge]!
  aggregate: AggregateMovieList!
}

input MovieListCreateInput {
  title: String!
  author: UserCreateOneWithoutMovieListsInput!
  movies: MovieCreateManyInput
}

input MovieListCreateManyWithoutAuthorInput {
  create: [MovieListCreateWithoutAuthorInput!]
  connect: [MovieListWhereUniqueInput!]
}

input MovieListCreateWithoutAuthorInput {
  title: String!
  movies: MovieCreateManyInput
}

type MovieListEdge {
  node: MovieList!
  cursor: String!
}

enum MovieListOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MovieListPreviousValues {
  id: ID!
  title: String!
}

input MovieListScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [MovieListScalarWhereInput!]
  OR: [MovieListScalarWhereInput!]
  NOT: [MovieListScalarWhereInput!]
}

type MovieListSubscriptionPayload {
  mutation: MutationType!
  node: MovieList
  updatedFields: [String!]
  previousValues: MovieListPreviousValues
}

input MovieListSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MovieListWhereInput
  AND: [MovieListSubscriptionWhereInput!]
  OR: [MovieListSubscriptionWhereInput!]
  NOT: [MovieListSubscriptionWhereInput!]
}

input MovieListUpdateInput {
  title: String
  author: UserUpdateOneRequiredWithoutMovieListsInput
  movies: MovieUpdateManyInput
}

input MovieListUpdateManyDataInput {
  title: String
}

input MovieListUpdateManyMutationInput {
  title: String
}

input MovieListUpdateManyWithoutAuthorInput {
  create: [MovieListCreateWithoutAuthorInput!]
  delete: [MovieListWhereUniqueInput!]
  connect: [MovieListWhereUniqueInput!]
  disconnect: [MovieListWhereUniqueInput!]
  update: [MovieListUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [MovieListUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [MovieListScalarWhereInput!]
  updateMany: [MovieListUpdateManyWithWhereNestedInput!]
}

input MovieListUpdateManyWithWhereNestedInput {
  where: MovieListScalarWhereInput!
  data: MovieListUpdateManyDataInput!
}

input MovieListUpdateWithoutAuthorDataInput {
  title: String
  movies: MovieUpdateManyInput
}

input MovieListUpdateWithWhereUniqueWithoutAuthorInput {
  where: MovieListWhereUniqueInput!
  data: MovieListUpdateWithoutAuthorDataInput!
}

input MovieListUpsertWithWhereUniqueWithoutAuthorInput {
  where: MovieListWhereUniqueInput!
  update: MovieListUpdateWithoutAuthorDataInput!
  create: MovieListCreateWithoutAuthorInput!
}

input MovieListWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  author: UserWhereInput
  movies_every: MovieWhereInput
  movies_some: MovieWhereInput
  movies_none: MovieWhereInput
  AND: [MovieListWhereInput!]
  OR: [MovieListWhereInput!]
  NOT: [MovieListWhereInput!]
}

input MovieListWhereUniqueInput {
  id: ID
}

enum MovieOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MoviePreviousValues {
  id: ID!
  title: String!
}

input MovieScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [MovieScalarWhereInput!]
  OR: [MovieScalarWhereInput!]
  NOT: [MovieScalarWhereInput!]
}

type MovieSubscriptionPayload {
  mutation: MutationType!
  node: Movie
  updatedFields: [String!]
  previousValues: MoviePreviousValues
}

input MovieSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MovieWhereInput
  AND: [MovieSubscriptionWhereInput!]
  OR: [MovieSubscriptionWhereInput!]
  NOT: [MovieSubscriptionWhereInput!]
}

input MovieUpdateDataInput {
  title: String
}

input MovieUpdateInput {
  title: String
}

input MovieUpdateManyDataInput {
  title: String
}

input MovieUpdateManyInput {
  create: [MovieCreateInput!]
  update: [MovieUpdateWithWhereUniqueNestedInput!]
  upsert: [MovieUpsertWithWhereUniqueNestedInput!]
  delete: [MovieWhereUniqueInput!]
  connect: [MovieWhereUniqueInput!]
  disconnect: [MovieWhereUniqueInput!]
  deleteMany: [MovieScalarWhereInput!]
  updateMany: [MovieUpdateManyWithWhereNestedInput!]
}

input MovieUpdateManyMutationInput {
  title: String
}

input MovieUpdateManyWithWhereNestedInput {
  where: MovieScalarWhereInput!
  data: MovieUpdateManyDataInput!
}

input MovieUpdateWithWhereUniqueNestedInput {
  where: MovieWhereUniqueInput!
  data: MovieUpdateDataInput!
}

input MovieUpsertWithWhereUniqueNestedInput {
  where: MovieWhereUniqueInput!
  update: MovieUpdateDataInput!
  create: MovieCreateInput!
}

input MovieWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [MovieWhereInput!]
  OR: [MovieWhereInput!]
  NOT: [MovieWhereInput!]
}

input MovieWhereUniqueInput {
  id: ID
}

type Mutation {
  createMovie(data: MovieCreateInput!): Movie!
  updateMovie(data: MovieUpdateInput!, where: MovieWhereUniqueInput!): Movie
  updateManyMovies(data: MovieUpdateManyMutationInput!, where: MovieWhereInput): BatchPayload!
  upsertMovie(where: MovieWhereUniqueInput!, create: MovieCreateInput!, update: MovieUpdateInput!): Movie!
  deleteMovie(where: MovieWhereUniqueInput!): Movie
  deleteManyMovies(where: MovieWhereInput): BatchPayload!
  createMovieList(data: MovieListCreateInput!): MovieList!
  updateMovieList(data: MovieListUpdateInput!, where: MovieListWhereUniqueInput!): MovieList
  updateManyMovieLists(data: MovieListUpdateManyMutationInput!, where: MovieListWhereInput): BatchPayload!
  upsertMovieList(where: MovieListWhereUniqueInput!, create: MovieListCreateInput!, update: MovieListUpdateInput!): MovieList!
  deleteMovieList(where: MovieListWhereUniqueInput!): MovieList
  deleteManyMovieLists(where: MovieListWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  movie(where: MovieWhereUniqueInput!): Movie
  movies(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Movie]!
  moviesConnection(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MovieConnection!
  movieList(where: MovieListWhereUniqueInput!): MovieList
  movieLists(where: MovieListWhereInput, orderBy: MovieListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MovieList]!
  movieListsConnection(where: MovieListWhereInput, orderBy: MovieListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MovieListConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  movie(where: MovieSubscriptionWhereInput): MovieSubscriptionPayload
  movieList(where: MovieListSubscriptionWhereInput): MovieListSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  name: String!
  password: String!
  movieLists(where: MovieListWhereInput, orderBy: MovieListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MovieList!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  name: String!
  password: String!
  movieLists: MovieListCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutMovieListsInput {
  create: UserCreateWithoutMovieListsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutMovieListsInput {
  email: String!
  name: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  name: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  name: String
  password: String
  movieLists: MovieListUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  email: String
  name: String
  password: String
}

input UserUpdateOneRequiredWithoutMovieListsInput {
  create: UserCreateWithoutMovieListsInput
  update: UserUpdateWithoutMovieListsDataInput
  upsert: UserUpsertWithoutMovieListsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutMovieListsDataInput {
  email: String
  name: String
  password: String
}

input UserUpsertWithoutMovieListsInput {
  update: UserUpdateWithoutMovieListsDataInput!
  create: UserCreateWithoutMovieListsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  movieLists_every: MovieListWhereInput
  movieLists_some: MovieListWhereInput
  movieLists_none: MovieListWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    