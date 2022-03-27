//https://api.nasa.gov/planetary/apod?api_key=YZspxxRfP1FxtZUbwYY2crO2FvTsU3n1d8VCSLg0

//loading enviroment variables from dontenv
require("dotenv").config()

//
const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect(process.env.Database_url, {useNewUrlParser: true })
let db = mongoose.connection 
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to db"))

app.listenerCount(3000, () => console.log("Started"))

//npm run dev