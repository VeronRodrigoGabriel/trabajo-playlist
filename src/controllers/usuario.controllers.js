const usuarioCtrl = {};
import usuarios from '../models/models.usuario.js';




//controladores

//crear usuario
usuarioCtrl.crearUsuario = async (req, res) => {
    const {
        nombre_completo,
        email,
        password,
        username,
        telefono
    } = req.body

    try {
        const Nuevousuario = new usuarios({
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

//Obtener un usuario
usuarioCtrl.obtenerUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const Usuario = await usuarios.findByPk(id);
        return res.json(Usuario);
    } catch (error) {
        console.log('Error al obtener el usuario', error);
        return res.status(500).json({
            message: 'Error al obtener el usuario'
        })
    }
}
//

export default usuarioCtrl;