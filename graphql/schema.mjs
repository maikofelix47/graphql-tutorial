import  { buildSchema } from 'graphql';

const graphqlSchema =  buildSchema(`
type Post {
   _id: ID!
   title : String
   content : String
   imageUrl: String
   creator: User
   createdAt : String
   updatedAt: String
}
type User {
   _id : ID!
   name: String
   email: String
   password : String
   status : String
   posts : [Post!]!
}
type TestData {
   text: String
   views : Int
}
input UserInputData {
   email: String
   name: String
   password: String
}
type Query {
   hello: TestData
}
type Mutation{
   createUser(userInput : UserInputData): User
}
`);

export { graphqlSchema }