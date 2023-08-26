import playListCtrl from '../controllers/playlist.controllers.js'
import { Router } from "express"

const router = Router()

router.get('/crear-playlist', playListCtrl.renderCrearPlayList)

//CRUD USUARIO

//Obtener todos
router.get('/playList', playListCtrl.renderPlayList)

//Obtener uno
router.get('/api/:id')

//Subir
router.post('/api/', playListCtrl.crearplaylist)

//Actualizar
router.put('/api/:id')

export default router


