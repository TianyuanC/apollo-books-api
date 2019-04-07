# Apollo Books API

A graphQL wrapper for the Books RESTful API

## Launch

```
yarn && yarn start
```

http://localhost:4000/

## Sample Query

The idea of GraphQL is self-documented, so there is no point writing extra sample queries like the following, and ideally we should be able to explore the schema ourselves to discover the query formats.

Since the purpose of this repository is an introduction of GraphQL, I think it will be helpful for beginners to play around with different types of query/mutation. And those sample queries are merely starting points. Have fun and happy hacking!

### Get all books

```javascript
{
  books {
    id
    title
    shelf
  }
}
```

### Get one book

```javascript
{
  book(id: "nggnmAEACAAJ") {
    id
    title
    shelf
  }
}
```

### Search books

```javascript
{
  search(input: {term: "iOS"}) {
    title,
    id
  }
}
```

### Update book shelf

```javascript
mutation{
  updateShelf(input: {id: "nggnmAEACAAJ", shelf:"wantToRead"}) {
    title
    shelf
  }
}
```
