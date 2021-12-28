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
    type User {
        _id: ID:
        username: String! @unique
        email: String! @unique
        password: String!
        savedBooks: [Book]      
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        users: [User]
        user(username: String!): User
        saveBook: Book
    }
    `;
