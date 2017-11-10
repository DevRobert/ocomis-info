const basicController = require("../controllers/basic")

const routes = [
    {
        method: "GET",
        path: "/",
        handler: basicController.version
    }
]

module.exports = routes