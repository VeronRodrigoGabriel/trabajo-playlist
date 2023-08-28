import playListCtrl from '../controllers/playlist.controllers.js'
import { Router } from "express"
const routes = Router()



//CRUD Playlist

//Obtener todos
routes.get('/api/', playListCtrl.obtenerPlaylists)

//Obtener uno
routes.get('/api/:id', playListCtrl.obtenerUnaPlaylist)

//crear
routes.post('/api/:usuarioId', playListCtrl.crearplaylist)

//Actualizar
routes.put('/api/:id', playListCtrl.editaPlaylist)

//elimninar
routes.delete('/api/:id', playListCtrl.eliminarPlaylist)

export default routes


