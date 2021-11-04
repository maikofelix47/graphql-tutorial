'use strict'

const graphQlResolvers = {
  hello: () =>{
    return {
      'text': 'Hello World',
      'views' : 12
    }
  }
}

export  { graphQlResolvers }