import { gql } from "apollo-server";

export const typeDefs = gql`
    type Book {
        title: String
        authors: [String]
        description: String
    }

    type Query {
        books: [Book]
    }
`;
