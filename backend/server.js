const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios');

const server = express();
dotenv.config();
server.use(cors(`${process.env.HOST}:${process.env.PORT}`));

const port = process.env.PORT;

const account = {
    user: process.env.USERNAME,
    password: process.env.PASSWORD
};

async function tokenRequest() {
    try {
        const res = await axios.post(process.env.AUTH_URL, account);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

server.get(process.env.TOKEN_URL, async (req, res) => {
    const tokenData = await tokenRequest();
    res.send(tokenData);
});

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
