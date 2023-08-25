import { Router } from "express"

const router = Router()



//CRUD USUARIO

//Obtener todos
router.get('/api')

//Obtener uno
router.get('/api/:id')

//Subir
router.post('/api/')

//Actualizar
router.put('/api/:id')


export default router



