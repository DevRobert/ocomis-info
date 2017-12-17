const version = function (request, reply) {
    const result = {
        message: 'Ocomis info service',
        time: new Date().toString(),
        version: '0.0.1 - todo'
    }

    reply(result)
}

module.exports = {
    version
}
