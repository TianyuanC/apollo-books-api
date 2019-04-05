import { gql } from "apollo-server";

export const typeDefs = gql`
    type Book {
        id: ID!
        title: String
        authors: [String]
        description: String
        shelf: String
    }

    type Query {
        getBooks: [Book]
        getBook(id: ID!): Book
    }

    input SearchInput {
        term: String
    }

    input ShelfInput {
        id: ID!
        shelf: String!
    }

    type Mutation {
        search(input: SearchInput): [Book]
        updateShelf(input: ShelfInput): Book
    }
`;
