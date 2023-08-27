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

//Obtener todas las playlist
playListCtrl.obtenerPlaylists = async (req,res) =>{
    try{
        const PlayList = await playList.findAll({})

        return res.json(PlayList)
    }catch(error){
        console.log('error al obtener playlists')
        return res.status(500).json({
            message:'error al obtener playlists'
        })
    }
}


//eliminar playlist
playListCtrl.eliminarPlaylist = async (req,res) =>{
    const {id_playlist} = req.params
    try{
        const playlist = await playList.destroy({
            where: {
                id_playlist
            }
        });

        return res.json({
            message: 'Playlist eliminada'
        }) 
    }catch(error){
        console.log('Error a eliminar la playlist')
        return res.status(500).json({
            message: 'Error a eliminar la playlist'
        })
    }
}
export default playListCtrl