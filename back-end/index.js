const express = require("express")
const dotenv = require("dotenv")
const { MongoClient } = require('mongodb');
dotenv.config({ encoding: false })

const PORT = process.env.PORT || 8080
const uri = procee.env.URI 
export const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main(){
    const app = express()
    try {
        client.connect()
    
    } catch (error) {
    
    }
    app.get("/", (req,res) => {
        res.send("Hello, world")
    })
    
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`)
    })
    
}


main()



