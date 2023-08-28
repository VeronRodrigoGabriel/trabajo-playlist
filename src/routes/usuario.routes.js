import express from "express"
import usuarioCtrl from "../controllers/usuario.controllers.js"
import {esquemaUsuario} from '../validators/usuarios.js'
import {esquemaValidacion} from '../middleware/validacion.js'
const routes = express.Router()



//CRUD USUARIO

routes.get('/registro', usuarioCtrl.renderCrearUsuario)

//crear usuario
routes.post('/crear-usuario/', esquemaUsuario,esquemaValidacion,usuarioCtrl.crearUsuario)

//Obtener un usuario
routes.get('/usuario/:id', usuarioCtrl.obtenerUsuario)

export default routes



