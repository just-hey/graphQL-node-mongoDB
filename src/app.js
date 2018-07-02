import express from 'express'
import graphqlHTTP from 'express-graphql'

const app = express()
const PORT = 3000

const schema = {}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}))

app.get('/', (req, res, next) => {
    let message = { msg: 'Hello World' }
    return res.json(message)
})

const listener = () => { console.log(`On port: ${PORT}`) }
app.listen(PORT, listener)