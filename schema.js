//const { gql } = require("apollo-server");
const { gql } = require("apollo-server-express");
exports.typeDefs = gql`
  type Plant {
    _id: ID
    genus: String!
    species: String
    commonName: String
    family: String
    category: String!
    description: String!
    location: String
    createdDate: String
    wows: Int
    username: String
  }

  type User {
    _id: ID
    username: String! @unique
    password: String!
    email: String! @unique
    joinDate: String
    favorites: [Plant]
  }

  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
    getAllPlants: [Plant]
  }

  type Mutation {
    addPlant(
      genus: String!
      species: String
      commonName: String
      family: String
      category: String!
      description: String!
      location: String
      createdDate: String
      wows: Int
      username: String
    ): Plant
  }
`;
