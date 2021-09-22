const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const TokenController = require('./controllers/TokenController');
const cookieParser = require('cookie-parser');

const app = express();
const router = express.Router();

dotEnv.config();

app.use(cookieParser());

app.use(
  cors({
    origin: 'http://localhost:9020',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true
  })
);

router.post('/auth/get-token', TokenController.getToken);

app.use(router);

const PORT = process.env.PORT_TOKEN_SERVICE || '3000';

startService();

async function startService() {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}!`);
    });
  } catch (error) {
    console.log(error);
  }
}
