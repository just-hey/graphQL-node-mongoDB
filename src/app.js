import express from 'express'

const app = express()
const PORT = 3000

app.get('/', (req, res, next) => {
    let message = { msg: 'Hello World' }
    return res.json(message)
})

const listener = () => { console.log(`On port: ${PORT}`) }
app.listen(PORT, listener)