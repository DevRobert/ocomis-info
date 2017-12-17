const basicController = require('../controllers/basic')

const routes = [
    {
        method: 'GET',
        path: '/info',
        handler: basicController.version
    }
]

module.exports = routes
