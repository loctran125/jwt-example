const mongoose = require('mongoose')


function newConnection(uri) {
    const conn = mongoose.createConnection(uri)

    conn.on('error', function(error) {
        console.log(`Mongodb:: connection ${this.name} ${JSON.stringify(error)}`)
    })
    conn.on('disconnected', function () {    // do not use arrow function
        console.log(`Mongodb:: disconnected:: ${this.name} `)
    })
    conn.on('connected', function () {
        console.log(`Mongodb:: connected:: ${this.name} `)
    })

    return conn

}   


//make connection to DB atlas
const uri = `mongodb+srv://${process.env.DB_ATLAS_USER_NAME}:${process.env.DB_ATLAS_PASS_WORD}@cluster0.c8suasf.mongodb.net/${process.env.DB_ATLAS_NAME}?retryWrites=true&w=majority`;
//make connection to DB test
//const uri = process.env.URI_MONGODB_TEST;
const testConnection = newConnection(uri);

module.exports = {
    testConnection
}