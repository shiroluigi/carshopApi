require('dotenv').config()
require('express-async-errors')
const { errHand } = require('./middleware/errors')

const express = require('express')
const router = require('./routes/routes')
const { connect } = require('./db/connect')


const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('working')
})

app.use('/products', router)

app.use(errHand)

const start = async (port) => {
    try {
        await connect(process.env.MONGO_URI)
        console.log("Connection to DB success!")
        app.listen(port, console.log(`Listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

const port = process.env.PORT || 4000
start(port)