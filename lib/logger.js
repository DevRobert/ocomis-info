const pino = require('pino')

const logger = pino().child({
    service: 'ocomis-info'
})

module.exports = logger
