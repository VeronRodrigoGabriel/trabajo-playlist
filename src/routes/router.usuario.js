const router = require('express').Router();




//CRUD USUARIO

//Obtener todos
router.get('/api')

//Obtener uno
router.get('/api/:id')

//Subir
router.post('/api/')

//Actualizar
router.put('/api/:id')


module.exports = router;



