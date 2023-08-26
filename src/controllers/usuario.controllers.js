const usuarioCtrl  = {};
import Usuarios from '../models/models.usuario.js'

usuarioCtrl.renderCrearUsuario = (req,res) => {
    res.render('CrearUsuario')
}

//controladores

//crear usuario
usuarioCtrl.crearUsuario = async (req, res) =>{
    const {
        nombre_completo,
        email,
        password,
        username,
        telefono
    } = req.body

    try {
        const Nuevousuario = new Usuarios({
            nombre_completo,
            email,
            password,
            username,
            telefono
        });
        await Nuevousuario.save();

        return res.status(201).json({
            message: 'Usuario creado con exito'
        })
    } catch (error) {
        console.log("error al crear usuario", error)
        return res.status(500).json({
            message: 'Error al crear usuario'
        })
    }
}

export default usuarioCtrl;