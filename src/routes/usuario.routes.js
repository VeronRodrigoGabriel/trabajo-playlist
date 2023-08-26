import express from "express"
import usuarioCtrl from "../controllers/usuario.controllers.js"
const routes = express.Router()



//CRUD USUARIO

//Obtener todos
routes.get('/api', usuarioCtrl.renderCrearUsuario)

//Obtener uno
routes.get('/api/:id')

//Subir
routes.post('/api/', usuarioCtrl.crearUsuario)



export default routes



