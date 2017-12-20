const Hapi = require('hapi')
const pino = require('pino')
const HapiPino = require('hapi-pino')
const routes = require('./lib/routes/')

const server = new Hapi.Server({
    port: 3000
})

server.route(routes)

async function provision () {
    const logger = pino().child({
        service: 'ocomis-info'
    })

    await server.register({
        plugin: HapiPino,
        options: {
            instance: logger
        }
    })

    await server.start()

    server.logger().info('Ocomis Info Service started.')
    server.logger().info(`Server running at: ${server.info.uri}`)
}

provision().catch((error) => {
    console.error(error)
    process.exit(1)
})
