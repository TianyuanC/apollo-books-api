import { ApolloServer, gql } from "apollo-server";
import { getAll } from "./BooksAPI.js";

const typeDefs = gql`
    type Book {
        title: String
        authors: [String]
        description: String
    }

    type Query {
        books: [Book]
    }
`;

const resolvers = {
    Query: {
        books: () => getAll()
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
