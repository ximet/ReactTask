const weatherApi = require('../http/weatherApi');

class weatherApiController {
    async getAccessToken(req, res) {
        try{
            const data = await weatherApi.getAccessToken();
            return res.json(data);
        } catch(e) {
            console.error(e);
        }
    }
}

module.exports = new weatherApiController();