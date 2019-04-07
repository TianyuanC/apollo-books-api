# Apollo Books API

A graphQL wrapper for the Books RESTful API

## Launch

```
yarn && yarn start
```

http://localhost:4000/

## Sample Query

The idea of GraphQL is self-documented, so there is no point writing extra sample queries like the following, and the ideally we should explore the schema ourselves to discover the query formats.  
But the purpose of the repository is an introduction of GraphQL, and I think it will be helpful to beginner so play around with different types of query/mutation

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
