const playListCtrl = {};
import playList from '../models/models.playlist.js'
playListCtrl.renderPlayList = (req,res) =>{
    res.render('playlist/playlist')
}

playListCtrl.renderCrearPlayList = (req,res) =>{
    res.render('playlist/formCrearPlayList')
}

//controladores

//crear playlist

playListCtrl.crearplaylist = async (req,res) =>{
    const {
        nombre_playlist,
        genero_musica
    } = req.body

    try {
        const nuevaPlaylist = new playList({
            nombre_playlist,
            genero_musica
        })
        await nuevaPlaylist.save()

        return res.status(201).json({
            message: 'Reserva del vuelo creada con exito'
        })

    } catch (error) {
        console.log("Error al crear reserva", error)
        return res.status(500).json({
            message: "error al crear reserva"
        })
    }

}

export default playListCtrl