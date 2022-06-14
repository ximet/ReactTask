const express = require('express')
const axios = require('axios')
require('dotenv').config()
const cors = require('cors')

const {
    API_USERNAME,
    API_PASSWORD,
    WEATHER_API_BASEURL,
    PORT
} = process.env

const authInfo = {
    user: API_USERNAME,
    password: API_PASSWORD
}

const server = express()

server.use(cors())
server.use(express.json())

server.listen(PORT, () => console.log(`Server running on ${PORT}`))

server.get('/token', async (req, res) => {
    try {
        console.log('Getting token...')
        if(!server.locals.token) {
            const response = await axios({
                url: `${WEATHER_API_BASEURL}/authorize/token`,
                method: 'post',
                data: {
                    ...authInfo
                }
            });
            server.locals.token = response.data
        }

        res.status(200).json(server.locals.token)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

