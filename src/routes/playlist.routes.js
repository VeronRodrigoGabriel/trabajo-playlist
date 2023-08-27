import playListCtrl from '../controllers/playlist.controllers.js'
import { Router } from "express"

const router = Router()

router.get('/crear-playlist', playListCtrl.renderCrearPlayList)
router.get('/playList', playListCtrl.renderPlayList)

//CRUD USUARIO

//Obtener todos
router.get('/api/', playListCtrl.obtenerPlaylists)

//Obtener uno
router.get('/api/:id')

//Subir
router.post('/api/', playListCtrl.crearplaylist)

//Actualizar
router.put('/api/:id')

//elimninar
router.delete('/api/:id_playlist', playListCtrl.eliminarPlaylist)

export default router


