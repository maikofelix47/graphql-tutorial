import  { buildSchema } from 'graphql';

const graphqlSchema =  buildSchema(`
type TestData {
   text: String
   views : Int
}
type RootQuery {
  hello: TestData
}
type Query {
   hello: TestData
}
`);

export { graphqlSchema }