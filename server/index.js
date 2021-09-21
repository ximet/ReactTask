const express = require('express');
const path = require('path')
const cors = require('cors')
const router = require('./src/routes/index')
require('dotenv').config()

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)

app.get( '/', (req, res) => {
    res.status(200).json({message: 'WORKING'})
})


const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e){
        console.error(e);
    }
}

start();