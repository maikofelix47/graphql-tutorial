'use strict'
import { User } from '../models/user.mjs'

const graphQlResolvers = {
  hello: () =>{
    return {
      'text': 'Hello World',
      'views' : 12
    }
  },
  createUser: async ({ userInput },req) =>{
     const email = userInput.email;
     const password = userInput.password;
     const name = userInput.name;
     const user = new User(name,email,password);
     const savedResults = await user.save();
     let savedUser = [];
     if(savedResults.length >  0){
        savedUser = savedResults[0];
     }

     return Promise.resolve(savedUser);
  }
}

export  { graphQlResolvers }