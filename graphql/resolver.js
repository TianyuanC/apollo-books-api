import { getAll } from "../BooksAPI.js";

export const resolvers = {
    Query: {
        books: () => getAll()
    }
};
