const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Query {
        hello: String
        listBooks: [Book]
        listBookById(_id: ID): Book
    }
    type Book {
        _id: ID
        title: String
        author: String
        pages: Int
        status: String
    }
    input BookInput {
        title: String!
        author: String!
        pages: Int!
        status: String!
    }
    type Mutation {
        createBook(input: BookInput): Book
        updateBook(_id: ID, input: BookInput): Book
        deleteBook(_id: ID): Book
    }
`);
