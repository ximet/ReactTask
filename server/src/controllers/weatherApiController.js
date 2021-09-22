const weatherApi = require('../http/weatherApi');

class weatherApiController {
    async getAccessToken(req, res) {
        const data = await weatherApi.getAccessToken();
        return res.json(data);
    }
}

module.exports = new weatherApiController();