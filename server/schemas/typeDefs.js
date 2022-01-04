const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Book {
        _id: ID:
        authors: [String]
        description: String!
        bookID: ID!
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
        me: User
    }
    input BookInput {
        authors: [String]
        description: String!
        bookId: ID!
        image: String
        link: String
        title: String!
    }
    type Mutation {
    # saveBook: Book
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    # next queries will use context becuase we are already logged in
    saveBook(bookData: BookInput!): User
    deleteBook(bookId: ID!): User
  }
    
    `;

module.exports = typeDefs;
