const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config


port = process.env.PORT || 3000

//middleware
app.use(morgan('dev'))
app.use(cors())

//Rutas
app.use('api', require('./src/routes/router.usuario'))


app.listen(() => {
    console.log('servidor escuchando en el puerto', port)
})

