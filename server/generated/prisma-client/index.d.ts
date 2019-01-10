// Code generated by Prisma (prisma@1.22.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  movie: (where?: MovieWhereInput) => Promise<boolean>;
  movieList: (where?: MovieListWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  movie: (where: MovieWhereUniqueInput) => MoviePromise;
  movies: (
    args?: {
      where?: MovieWhereInput;
      orderBy?: MovieOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Movie>;
  moviesConnection: (
    args?: {
      where?: MovieWhereInput;
      orderBy?: MovieOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => MovieConnectionPromise;
  movieList: (where: MovieListWhereUniqueInput) => MovieListPromise;
  movieLists: (
    args?: {
      where?: MovieListWhereInput;
      orderBy?: MovieListOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<MovieList>;
  movieListsConnection: (
    args?: {
      where?: MovieListWhereInput;
      orderBy?: MovieListOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => MovieListConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createMovie: (data: MovieCreateInput) => MoviePromise;
  updateMovie: (
    args: { data: MovieUpdateInput; where: MovieWhereUniqueInput }
  ) => MoviePromise;
  updateManyMovies: (
    args: { data: MovieUpdateManyMutationInput; where?: MovieWhereInput }
  ) => BatchPayloadPromise;
  upsertMovie: (
    args: {
      where: MovieWhereUniqueInput;
      create: MovieCreateInput;
      update: MovieUpdateInput;
    }
  ) => MoviePromise;
  deleteMovie: (where: MovieWhereUniqueInput) => MoviePromise;
  deleteManyMovies: (where?: MovieWhereInput) => BatchPayloadPromise;
  createMovieList: (data: MovieListCreateInput) => MovieListPromise;
  updateMovieList: (
    args: { data: MovieListUpdateInput; where: MovieListWhereUniqueInput }
  ) => MovieListPromise;
  updateManyMovieLists: (
    args: {
      data: MovieListUpdateManyMutationInput;
      where?: MovieListWhereInput;
    }
  ) => BatchPayloadPromise;
  upsertMovieList: (
    args: {
      where: MovieListWhereUniqueInput;
      create: MovieListCreateInput;
      update: MovieListUpdateInput;
    }
  ) => MovieListPromise;
  deleteMovieList: (where: MovieListWhereUniqueInput) => MovieListPromise;
  deleteManyMovieLists: (where?: MovieListWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  movie: (
    where?: MovieSubscriptionWhereInput
  ) => MovieSubscriptionPayloadSubscription;
  movieList: (
    where?: MovieListSubscriptionWhereInput
  ) => MovieListSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type MovieOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MovieListOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "name_ASC"
  | "name_DESC"
  | "password_ASC"
  | "password_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type MovieWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface MovieWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  AND?: MovieWhereInput[] | MovieWhereInput;
  OR?: MovieWhereInput[] | MovieWhereInput;
  NOT?: MovieWhereInput[] | MovieWhereInput;
}

export type MovieListWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface MovieListWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  author?: UserWhereInput;
  movies_every?: MovieWhereInput;
  movies_some?: MovieWhereInput;
  movies_none?: MovieWhereInput;
  AND?: MovieListWhereInput[] | MovieListWhereInput;
  OR?: MovieListWhereInput[] | MovieListWhereInput;
  NOT?: MovieListWhereInput[] | MovieListWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  movieLists_every?: MovieListWhereInput;
  movieLists_some?: MovieListWhereInput;
  movieLists_none?: MovieListWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface MovieCreateInput {
  title: String;
}

export interface MovieUpdateInput {
  title?: String;
}

export interface MovieUpdateManyMutationInput {
  title?: String;
}

export interface MovieListCreateInput {
  title: String;
  author: UserCreateOneWithoutMovieListsInput;
  movies?: MovieCreateManyInput;
}

export interface UserCreateOneWithoutMovieListsInput {
  create?: UserCreateWithoutMovieListsInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateWithoutMovieListsInput {
  email: String;
  name: String;
  password: String;
}

export interface MovieCreateManyInput {
  create?: MovieCreateInput[] | MovieCreateInput;
  connect?: MovieWhereUniqueInput[] | MovieWhereUniqueInput;
}

export interface MovieListUpdateInput {
  title?: String;
  author?: UserUpdateOneRequiredWithoutMovieListsInput;
  movies?: MovieUpdateManyInput;
}

export interface UserUpdateOneRequiredWithoutMovieListsInput {
  create?: UserCreateWithoutMovieListsInput;
  update?: UserUpdateWithoutMovieListsDataInput;
  upsert?: UserUpsertWithoutMovieListsInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateWithoutMovieListsDataInput {
  email?: String;
  name?: String;
  password?: String;
}

export interface UserUpsertWithoutMovieListsInput {
  update: UserUpdateWithoutMovieListsDataInput;
  create: UserCreateWithoutMovieListsInput;
}

export interface MovieUpdateManyInput {
  create?: MovieCreateInput[] | MovieCreateInput;
  update?:
    | MovieUpdateWithWhereUniqueNestedInput[]
    | MovieUpdateWithWhereUniqueNestedInput;
  upsert?:
    | MovieUpsertWithWhereUniqueNestedInput[]
    | MovieUpsertWithWhereUniqueNestedInput;
  delete?: MovieWhereUniqueInput[] | MovieWhereUniqueInput;
  connect?: MovieWhereUniqueInput[] | MovieWhereUniqueInput;
  disconnect?: MovieWhereUniqueInput[] | MovieWhereUniqueInput;
  deleteMany?: MovieScalarWhereInput[] | MovieScalarWhereInput;
  updateMany?:
    | MovieUpdateManyWithWhereNestedInput[]
    | MovieUpdateManyWithWhereNestedInput;
}

export interface MovieUpdateWithWhereUniqueNestedInput {
  where: MovieWhereUniqueInput;
  data: MovieUpdateDataInput;
}

export interface MovieUpdateDataInput {
  title?: String;
}

export interface MovieUpsertWithWhereUniqueNestedInput {
  where: MovieWhereUniqueInput;
  update: MovieUpdateDataInput;
  create: MovieCreateInput;
}

export interface MovieScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  AND?: MovieScalarWhereInput[] | MovieScalarWhereInput;
  OR?: MovieScalarWhereInput[] | MovieScalarWhereInput;
  NOT?: MovieScalarWhereInput[] | MovieScalarWhereInput;
}

export interface MovieUpdateManyWithWhereNestedInput {
  where: MovieScalarWhereInput;
  data: MovieUpdateManyDataInput;
}

export interface MovieUpdateManyDataInput {
  title?: String;
}

export interface MovieListUpdateManyMutationInput {
  title?: String;
}

export interface UserCreateInput {
  email: String;
  name: String;
  password: String;
  movieLists?: MovieListCreateManyWithoutAuthorInput;
}

export interface MovieListCreateManyWithoutAuthorInput {
  create?:
    | MovieListCreateWithoutAuthorInput[]
    | MovieListCreateWithoutAuthorInput;
  connect?: MovieListWhereUniqueInput[] | MovieListWhereUniqueInput;
}

export interface MovieListCreateWithoutAuthorInput {
  title: String;
  movies?: MovieCreateManyInput;
}

export interface UserUpdateInput {
  email?: String;
  name?: String;
  password?: String;
  movieLists?: MovieListUpdateManyWithoutAuthorInput;
}

export interface MovieListUpdateManyWithoutAuthorInput {
  create?:
    | MovieListCreateWithoutAuthorInput[]
    | MovieListCreateWithoutAuthorInput;
  delete?: MovieListWhereUniqueInput[] | MovieListWhereUniqueInput;
  connect?: MovieListWhereUniqueInput[] | MovieListWhereUniqueInput;
  disconnect?: MovieListWhereUniqueInput[] | MovieListWhereUniqueInput;
  update?:
    | MovieListUpdateWithWhereUniqueWithoutAuthorInput[]
    | MovieListUpdateWithWhereUniqueWithoutAuthorInput;
  upsert?:
    | MovieListUpsertWithWhereUniqueWithoutAuthorInput[]
    | MovieListUpsertWithWhereUniqueWithoutAuthorInput;
  deleteMany?: MovieListScalarWhereInput[] | MovieListScalarWhereInput;
  updateMany?:
    | MovieListUpdateManyWithWhereNestedInput[]
    | MovieListUpdateManyWithWhereNestedInput;
}

export interface MovieListUpdateWithWhereUniqueWithoutAuthorInput {
  where: MovieListWhereUniqueInput;
  data: MovieListUpdateWithoutAuthorDataInput;
}

export interface MovieListUpdateWithoutAuthorDataInput {
  title?: String;
  movies?: MovieUpdateManyInput;
}

export interface MovieListUpsertWithWhereUniqueWithoutAuthorInput {
  where: MovieListWhereUniqueInput;
  update: MovieListUpdateWithoutAuthorDataInput;
  create: MovieListCreateWithoutAuthorInput;
}

export interface MovieListScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  AND?: MovieListScalarWhereInput[] | MovieListScalarWhereInput;
  OR?: MovieListScalarWhereInput[] | MovieListScalarWhereInput;
  NOT?: MovieListScalarWhereInput[] | MovieListScalarWhereInput;
}

export interface MovieListUpdateManyWithWhereNestedInput {
  where: MovieListScalarWhereInput;
  data: MovieListUpdateManyDataInput;
}

export interface MovieListUpdateManyDataInput {
  title?: String;
}

export interface UserUpdateManyMutationInput {
  email?: String;
  name?: String;
  password?: String;
}

export interface MovieSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: MovieWhereInput;
  AND?: MovieSubscriptionWhereInput[] | MovieSubscriptionWhereInput;
  OR?: MovieSubscriptionWhereInput[] | MovieSubscriptionWhereInput;
  NOT?: MovieSubscriptionWhereInput[] | MovieSubscriptionWhereInput;
}

export interface MovieListSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: MovieListWhereInput;
  AND?: MovieListSubscriptionWhereInput[] | MovieListSubscriptionWhereInput;
  OR?: MovieListSubscriptionWhereInput[] | MovieListSubscriptionWhereInput;
  NOT?: MovieListSubscriptionWhereInput[] | MovieListSubscriptionWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Movie {
  id: ID_Output;
  title: String;
}

export interface MoviePromise extends Promise<Movie>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
}

export interface MovieSubscription
  extends Promise<AsyncIterator<Movie>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
}

export interface MovieConnection {}

export interface MovieConnectionPromise
  extends Promise<MovieConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<MovieEdge>>() => T;
  aggregate: <T = AggregateMoviePromise>() => T;
}

export interface MovieConnectionSubscription
  extends Promise<AsyncIterator<MovieConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<MovieEdgeSubscription>>>() => T;
  aggregate: <T = AggregateMovieSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface MovieEdge {
  cursor: String;
}

export interface MovieEdgePromise extends Promise<MovieEdge>, Fragmentable {
  node: <T = MoviePromise>() => T;
  cursor: () => Promise<String>;
}

export interface MovieEdgeSubscription
  extends Promise<AsyncIterator<MovieEdge>>,
    Fragmentable {
  node: <T = MovieSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateMovie {
  count: Int;
}

export interface AggregateMoviePromise
  extends Promise<AggregateMovie>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateMovieSubscription
  extends Promise<AsyncIterator<AggregateMovie>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface MovieList {
  id: ID_Output;
  title: String;
}

export interface MovieListPromise extends Promise<MovieList>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  author: <T = UserPromise>() => T;
  movies: <T = FragmentableArray<Movie>>(
    args?: {
      where?: MovieWhereInput;
      orderBy?: MovieOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface MovieListSubscription
  extends Promise<AsyncIterator<MovieList>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  author: <T = UserSubscription>() => T;
  movies: <T = Promise<AsyncIterator<MovieSubscription>>>(
    args?: {
      where?: MovieWhereInput;
      orderBy?: MovieOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface User {
  id: ID_Output;
  email: String;
  name: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  password: () => Promise<String>;
  movieLists: <T = FragmentableArray<MovieList>>(
    args?: {
      where?: MovieListWhereInput;
      orderBy?: MovieListOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  movieLists: <T = Promise<AsyncIterator<MovieListSubscription>>>(
    args?: {
      where?: MovieListWhereInput;
      orderBy?: MovieListOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface MovieListConnection {}

export interface MovieListConnectionPromise
  extends Promise<MovieListConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<MovieListEdge>>() => T;
  aggregate: <T = AggregateMovieListPromise>() => T;
}

export interface MovieListConnectionSubscription
  extends Promise<AsyncIterator<MovieListConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<MovieListEdgeSubscription>>>() => T;
  aggregate: <T = AggregateMovieListSubscription>() => T;
}

export interface MovieListEdge {
  cursor: String;
}

export interface MovieListEdgePromise
  extends Promise<MovieListEdge>,
    Fragmentable {
  node: <T = MovieListPromise>() => T;
  cursor: () => Promise<String>;
}

export interface MovieListEdgeSubscription
  extends Promise<AsyncIterator<MovieListEdge>>,
    Fragmentable {
  node: <T = MovieListSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateMovieList {
  count: Int;
}

export interface AggregateMovieListPromise
  extends Promise<AggregateMovieList>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateMovieListSubscription
  extends Promise<AsyncIterator<AggregateMovieList>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface MovieSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface MovieSubscriptionPayloadPromise
  extends Promise<MovieSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = MoviePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MoviePreviousValuesPromise>() => T;
}

export interface MovieSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MovieSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MovieSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MoviePreviousValuesSubscription>() => T;
}

export interface MoviePreviousValues {
  id: ID_Output;
  title: String;
}

export interface MoviePreviousValuesPromise
  extends Promise<MoviePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
}

export interface MoviePreviousValuesSubscription
  extends Promise<AsyncIterator<MoviePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
}

export interface MovieListSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface MovieListSubscriptionPayloadPromise
  extends Promise<MovieListSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = MovieListPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MovieListPreviousValuesPromise>() => T;
}

export interface MovieListSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MovieListSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MovieListSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MovieListPreviousValuesSubscription>() => T;
}

export interface MovieListPreviousValues {
  id: ID_Output;
  title: String;
}

export interface MovieListPreviousValuesPromise
  extends Promise<MovieListPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
}

export interface MovieListPreviousValuesSubscription
  extends Promise<AsyncIterator<MovieListPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  name: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models = [
  {
    name: "Movie",
    embedded: false
  },
  {
    name: "MovieList",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
