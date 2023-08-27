import express from "express"
import usuarioCtrl from "../controllers/usuario.controllers.js"
const routes = express.Router()



//CRUD USUARIO

routes.get('/registro', usuarioCtrl.renderCrearUsuario)

//crear usuario
routes.post('/crear-usuario/', usuarioCtrl.crearUsuario)

//Obtener un usuario
routes.get('/usuario/:id', usuarioCtrl.obtenerUsuario)

export default routes



