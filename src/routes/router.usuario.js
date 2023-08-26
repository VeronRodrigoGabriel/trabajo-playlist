import express from "express"
import usuarioCtrl from "../controllers/usuario.controllers.js"
const router = express.Router()



//CRUD USUARIO

//Obtener todos
router.get('/api', usuarioCtrl.renderCrearUsuario)

//Obtener uno
router.get('/api/:id')

//Subir
router.post('/api/', usuarioCtrl.crearUsuario)



export default router



