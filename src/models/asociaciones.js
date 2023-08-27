import sequelize from '../../db.js'
import usuarios from '../models/models.usuario.js'
import playList from './models.playlist.js'


//Relacion uno a muchos entre el usuario y las playlist
usuarios.hasMany(playList, {as:'playlist', foreingKey: 'usuariosId'});

playList.belongsTo(usuarios,{as:'usuarios'});

sequelize.models = {
    usuarios,
    playList
}

export default sequelize