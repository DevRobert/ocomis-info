const Hapi = require("hapi")
const routes = require("./lib/routes/")

const server = new Hapi.Server()

server.connection({
    port: 3000
})

server.route(routes)

server.start((error) => {
    if(error) {
        throw error
    }

    console.log("Ocomis info service started.")
    console.log("Server running at: " + server.info.uri)
})