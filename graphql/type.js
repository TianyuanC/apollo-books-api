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
        books: [Book]
        book(id: ID!): Book
        search(input: SearchInput): [Book]
    }

    input SearchInput {
        term: String
    }

    input ShelfInput {
        id: ID!
        shelf: String!
    }

    type Mutation {
        updateShelf(input: ShelfInput): Book
    }
`;
