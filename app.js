import express from 'express'
const app = express()
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'



dotenv.config()
export { dotenv }

const port = process.env.PORT


//middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Rutas
import routesUsuarios from './src/routes/usuario.routes.js'
import routesPlayList from './src/routes/playlist.routes.js'
import routesCanciones from './src/routes/canciones.routes.js'

app.use(routesCanciones)
app.use(routesUsuarios)
app.use(routesPlayList)

//Base de datos
import sequelize from './src/models/asociaciones.js'
sequelize.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(err => console.error(err));

app.listen(port, () => {
    console.log('servidor escuchando en el puerto', port)
})

