const Router = require('express');
const weatherApiRouter = require('./weatherApiRouter')
const router = new Router();

router.use('/weatherApi', weatherApiRouter);

module.exports = router;