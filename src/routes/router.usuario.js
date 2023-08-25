import express from "express"
import Usuarioctrl from '../controllers/usuario.controllers.js'
const router = express.Router()



//CRUD USUARIO

//Obtener todos
router.get('/api', Usuarioctrl.renderCrearUsuario)

//Obtener uno
router.get('/api/:id')

//Subir
router.post('/api/')



export default router



