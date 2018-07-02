import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

const app = express()
const PORT = 3000

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    context: {
        userId: 1
    }
}))

app.get('/', (req, res, next) => {
    let message = { msg: 'Hello World' }
    return res.json(message)
})

const listener = () => { console.log(`On port: ${PORT}`) }
app.listen(PORT, listener)