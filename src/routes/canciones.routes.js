import express from 'express'
import cancionesCtrl from '../controllers/canciones.controllers.js'
const routes = express.Router()

//Obtener todas las canciones
routes.get('/canciones', cancionesCtrl.obtenerCanciones)

//Agregar canciones
routes.post('/agregar-cancion/:playlistId', cancionesCtrl.agregarCanciones)

export default routes