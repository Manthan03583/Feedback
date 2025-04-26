
const mongoose = require('mongoose')
const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true }

const connectDB = async () =>{
    try{
        const conn = mongoose.connect(process.env.DB_URI, connectionParams)
        console.log("Mongodb connected successfully")
    } catch(error){
        console.error('Could not connect to MongoDB:', error)
        process.exit(1)
    }
}

module.exports = connectDB
