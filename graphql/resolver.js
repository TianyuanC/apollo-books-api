import { getAll, get, search, update } from "../BooksAPI.js";

export const resolvers = {
    Query: {
        books: () => getAll(),
        book: (root, { id }) => get(id),
        search: (root, { input }) => search(input.term)
    },

    Mutation: {
        updateShelf: (root, { input }) =>
            update({ id: input.id }, input.shelf).then(() => get(input.id))
    }
};
