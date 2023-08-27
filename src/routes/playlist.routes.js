import playListCtrl from '../controllers/playlist.controllers.js'
import { Router } from "express"
const router = Router()

router.get('/crear-playlist', playListCtrl.renderCrearPlayList)
router.get('/playList', playListCtrl.renderPlayList)

//CRUD Playlist

//Obtener todos
router.get('/api/', playListCtrl.obtenerPlaylists)

//Obtener uno
router.get('/api/:id')

//crear
router.post('/api/', playListCtrl.crearplaylist)

//Actualizar
router.put('/api/:id', playListCtrl.editaPlaylist)

//elimninar
router.delete('/api/:id', playListCtrl.eliminarPlaylist)

export default router


