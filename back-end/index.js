const express = require("express")
const dotenv = require("dotenv")
const { connect } = require('mongoose');
const { Citizen } = require("./models")
const routes = require("./routes/route")
dotenv.config({ encoding: false })

const PORT = process.env.PORT || 8080
const uri = process.env.URI 

async function main(){
    try {
        const app = express()
        await connect(uri)

        app.use("/api/", routes)

        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`)
        })
    } catch (error) {
        console.error(error)
    }
    
}


main()



