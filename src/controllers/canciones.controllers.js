import canciones from '../models/models.canciones.js'
const cancionesCtrl = {}

//controladores canciones

//obtener todas las canciones
cancionesCtrl.obtenerCanciones = async (req,res) =>{
    try{
        const Canciones = await canciones.findAll({})
        
        return res.json(Canciones)
    }catch(error){
        console.log('Error al obtener las canciones',error)
        return res.status(500).json({
            message: 'Error al obtener las canciones'
        })
    }
}
//añadir canciones
cancionesCtrl.agregarCanciones = async (req,res) => {
    try{
        const {
            nombre_cancion,
            artista,
            duracion
        } = req.body

        const Cancion = new canciones({
            nombre_cancion,
            artista,
            duracion
        })
        await Cancion.save()

        return res.json({
            message:'cancion agregada'
        })
    }catch(error){
        console.log('Error al agregar la cancion ',error)
        return res.status(500).json({
            message: 'Error al agregar la cancion'
        })
    }
}

export default cancionesCtrl