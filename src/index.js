const { ApolloServer, gql } = require("apollo-server");

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Graphql schema
const typeDefs = gql`
 type Book{
    title: String,
    author: String
 }

  type Query {
    books: [Book]
  }
`;

// implementation of the Graphql schema
const resolvers = {
  Query: {
    books: () => books
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is running on ${url}`);
});
