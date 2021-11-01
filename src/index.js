const { ApolloServer, gql } = require("apollo-server");

// Graphql schema
const typeDefs = gql`
  type Query {
    info: String!
  }
`;

// implementation of the Graphql schema
const resolvers = {
  Query: {
    info: () => "This is the API for Hackernews clone",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is running on ${url}`);
});
