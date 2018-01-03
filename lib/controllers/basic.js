const version = function (request, h) {
    const result = {
        service: 'Ocomis Info Service',
        time: new Date().toString()
    }

    return h.response(result)
}

module.exports = {
    version
}
