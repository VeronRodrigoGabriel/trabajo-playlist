import playListCtrl from '../controllers/playlist.controllers.js'
import { Router } from "express"
const routes = Router()

routes.get('/crear-playlist', playListCtrl.renderCrearPlayList)
routes.get('/playList', playListCtrl.renderPlayList)

//CRUD Playlist

//Obtener todos
routes.get('/api/', playListCtrl.obtenerPlaylists)

//Obtener uno
routes.get('/api/:id')

//crear
routes.post('/api/', playListCtrl.crearplaylist)

//Actualizar
routes.put('/api/:id', playListCtrl.editaPlaylist)

//elimninar
routes.delete('/api/:id', playListCtrl.eliminarPlaylist)

export default routes


