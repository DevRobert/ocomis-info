const version = function (request, h) {
    const result = {
        message: 'Ocomis Info Service',
        time: new Date().toString()
    }

    return h.response(result)
}

module.exports = {
    version
}
