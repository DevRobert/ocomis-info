const Hapi = require("hapi")

const server = new Hapi.Server()

server.connection({
    port: 3000
})

const routes = [
    {
        method: "GET",
        path: "/",
        handler: (request, response) => {
            const result = {
                message: "Ocomis info service",
                time: new Date().toString()
            }
           
            response(result)
        }
    }
]

server.route(routes)

server.start((error) => {
    if(error) {
        throw error
    }

    console.log("Ocomis info service started.")
    console.log("Server running at: " + server.info.uri)
})