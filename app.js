import express from 'express'
const app = express()
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import path from  'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';


dotenv.config()
export {dotenv}


const port = process.env.PORT
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//middleware
app.use(morgan('dev'))
app.use(cors())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Rutas
import routes from './src/routes/usuario.routes.js'
import routesPlayList from './src/routes/playlist.routes.js'
app.use( routes)
app.use(routesPlayList)

//Base de datos
import sequelize from './db.js'
sequelize.authenticate()
.then(() => console.log('data base connected'))
.catch(err => console.error(err));

app.listen(port,() => {
    console.log('servidor escuchando en el puerto', port)
})

