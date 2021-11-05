import express  from 'express';
import { graphqlHTTP,  } from 'express-graphql';
import  { buildSchema } from 'graphql';

//shcemas and resolvers

import { graphqlSchema } from './graphql/schema.mjs';
import { graphQlResolvers } from './graphql/resolvers.mjs';


const app = express();
app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphQlResolvers,
  graphiql: true
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));