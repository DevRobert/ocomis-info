const Hapi = require('hapi')
const HapiPino = require('hapi-pino')
const routes = require('./lib/routes/')
const logger = require('./lib/logger')

const server = new Hapi.Server({
    port: 3000
})

server.route(routes)

async function provision () {
    await server.register({
        plugin: HapiPino,
        options: {
            instance: logger
        }
    })

    await server.start()

    logger.info('Ocomis Info Service started.')
    logger.info(`Server running at: ${server.info.uri}`)
}

provision().catch((error) => {
    logger.error(error)
    process.exit(1)
})

module.exports = server // for testing
