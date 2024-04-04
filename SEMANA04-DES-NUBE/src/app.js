const express = require('express')
const app = express()
const routes = require('./rutas.js')

app.use(routes)

const port = 12200

app.listen(port, () => {
    console.log(`Server on port: ${port}`)
})

