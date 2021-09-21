const Router = require('express');
const router = new Router();
const weatherApiController = require('../controllers/weatherApiController')

router.post('/getAccessToken', weatherApiController.getAccessToken);

module.exports = router;