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
    if (!req.cookies['Authorization']) {
        axios.post(`${AUTH_ADDRESS}?expire_hours=${EXPIRATION_TIME}&user=${USER}&password=${PASSWORD}`)
            .then(result => (res.cookie('Authorization', JSON.stringify(result.data.access_token)), res.send(result.data.access_token)
            ))
    } else {
        res.send(req.cookies['Authorization'])
    }
});