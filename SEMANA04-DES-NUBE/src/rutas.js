const router = require('express').Router()

router.get('/', (req, res) => {
    res.sendFile("./home.html", {
        root: __dirname
    })
})

router.get('/clientes', (req, res) => {
    res.sendFile("./clientes.html" , {
        root: __dirname
    })
})

router.get('/productos', (req, res) => {
    res.sendFile("./productos.html", {
        root: __dirname
    })
})

module.exports = router