import { getAll, get, search, update } from "../BooksAPI.js";

export const resolvers = {
    Query: {
        getBooks: () => getAll(),
        getBook: (root, { id }) => get(id)
    },

    Mutation: {
        search: (root, { input }) => search(input.term),
        updateShelf: (root, { input }) => update({ id: input.id }, input.shelf)
    }
};
