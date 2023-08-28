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
            message: 'Playlist creada con exito'
        })

    } catch (error) {
        console.log('Error al crear Playlist',error)
        return res.status(500).json({
            message: 'Error al crear Playlist'
        })
    }

}

//Obtener todas las playlist
playListCtrl.obtenerPlaylists = async (req,res) =>{
    try{
        const PlayList = await playList.findAll({})

        return res.json(PlayList)
    }catch(error){
        console.log('error al obtener playlists',error)
        return res.status(500).json({
            message:'error al obtener playlists'
        })
    }
}


//eliminar playlist
playListCtrl.eliminarPlaylist = async (req,res) =>{
    const {id} = req.params
    try{
        const playlist = await playList.destroy({
            where: {
                id
            }
        });

        return res.json({
            message: 'Playlist eliminada'
        }) 
    }catch(error){
        console.log('Error a eliminar la playlist',error)
        return res.status(500).json({
            message: 'Error a eliminar la playlist'
        })
    }
}

//Actualizar
playListCtrl.editaPlaylist = async (req,res) =>{
    try{
        const {id} = req.params
        const playlist = await playList.findByPk(id)
        
        await playlist.update(req.body)
        return res.json({
            message: 'Playlist editada con exito'
        })
    }catch(error){
        console.log('Error al editar playlist',error)
        return res.status(500).json({
            message: 'Error al editar la playlist'
        })
    }
}
export default playListCtrl