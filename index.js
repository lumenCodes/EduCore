const express = require("express")
const dotenv = require("dotenv")
const router = require("./routes")
const mongoose= require("mongoose")

app.use(express.json)
app.use(router)

const DBURL = process.env.DBURL
const PORT = process.env.PORT || 6789


mongoose.connect(DBURL)
.then(()=>{
    console.log("Database connected")

    app.listen(PORT, ()=>{
        console.log("Server listening on ", + PORT)
    })
})

