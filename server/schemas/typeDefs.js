const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Book {
        _id: ID:
        authors: String
        description: String!
        bookID: String!
        image: String
        link: String
        title: String!
    },
    type USER {
        _id: ID:
        username: String! @unique
        email: String! @unique
        password: String!
        savedBooks: [Book]0        
    }`;
