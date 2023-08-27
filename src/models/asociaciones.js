import sequelize from '../../db.js'
import usuarios from './models.usuario.js'
import playList from './models.playlist.js'
import canciones from './models.canciones.js'

//Relacion uno a muchos entre el usuario y las playlist
usuarios.hasMany(playList, {
    foreignKey: "usuarioId",
    sourceKey: "id",
  })
  
  playList.belongsTo(usuarios, {
    foreignKey: "usuarioId",
    targetKey: "id",
  })

//Relacion de uno a muchos entre las playlist y las canciones 
playList.hasMany(canciones,{
    foreignKey: 'playlistId',
    sourceKey: 'id'
})

canciones.belongsTo(playList,{
    foreignKey: 'playlistId',
    targetKey:'id'
})

//Creamos las tablas
usuarios.sync({ force: false }).then(() => {
    console.log('Tabla de Usuarios creada');
});

playList.sync({force: false}).then(()=>{
    console.log('Tabla de playlist creada')
})

canciones.sync({force: false}).then(()=>{
    console.log('Tabla de canciones creada')
})

sequelize.models = {
    usuarios,
    playList,
    canciones
}

export default sequelize