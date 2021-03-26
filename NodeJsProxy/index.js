const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
require('dotenv').config()

// Create Express Server
const app = express();

// Configuration
const PORT = 3000;
const HOST = "localhost";


app.use(cors());

app.get('/auth', async function (req, res) {
  try {
    
    const url = `https://pfa.foreca.com/authorize/token?user=${process.env.USER}&password=${process.env.PASS}&expire_hours=${process.env.EXPIRE_HOURS}`;
    const response = await axios.post(url)
    res.send(response.data)

  } catch (error) {
    
    res.send(error.message)
  }

});

// Start Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
