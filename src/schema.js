import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
    type Hero {
        _id: ID
        name: String!
        alias: String!
    }
    type Query { 
        allHero: [Hero]
    }
`

export default makeExecutableSchema({
    typeDefs,
    resolvers
})


                        