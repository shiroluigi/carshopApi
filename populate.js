require('dotenv').config()

const {connect} = require('./db/connect')
const Product = require('./models/schema')

const jsonProducts = require('./products.json')


const start = async () => {
    try {
        console.log("Please wait for the operation to end automatically...")
        await connect(process.env.MONGO_URI)
        console.log("db connected..\nWriting json to db...")
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log("Written!\nExitting...")
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


start()