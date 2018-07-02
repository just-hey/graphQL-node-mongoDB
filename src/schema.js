import { makeExecuteableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `type Query { name: String! }`

exports default makeExecuteableSchema({
    typeDefs,
    resolvers
})


                        