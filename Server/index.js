const express = require("express");
const axios = require('axios')
const cookieParser = require('cookie-parser')
const app = express()
require('dotenv').config()

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "http://localhost:9020");
    response.header("Access-Control-Allow-Credentials", true);
    next();
});

const USER = process.env.USER
const PASSWORD = process.env.PASSWORD
const PORT = process.env.PORT || 3001;
const AUTH_ADDRESS = process.env.AUTH_ADDRESS
const EXPIRATION_TIME = process.env.EXPIRATION_TIME
const SPARE_TOKEN = process.env.TOKEN
app.use(cookieParser());

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

app.get("/api", async (req, res) => {
    res.send(SPARE_TOKEN)
});