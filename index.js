const Hapi = require('hapi')
const HapiPino = require('hapi-pino')
const routes = require('./lib/routes/')

const server = new Hapi.Server({
    port: 3000
})

server.route(routes)

async function provision() {
    await server.register(HapiPino)
    await server.start()

    server.logger().info('Ocomis info service started.')
    server.logger().info(`Server running at: ${server.info.uri}`)
}

provision().catch((error) => {
    console.error(error)
    process.exit(1)
})
