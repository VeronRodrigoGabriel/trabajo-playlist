import express from "express"
import usuarioCtrl from "../controllers/usuario.controllers.js"
const routes = express.Router()



//CRUD USUARIO

//Obtener todos
routes.get('/registro', usuarioCtrl.renderCrearUsuario)

//Subir
routes.post('/crear-usuario/', usuarioCtrl.crearUsuario)



export default routes



