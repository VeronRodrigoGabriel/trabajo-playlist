import sequelize from "../../db.js";
import { DataTypes } from "sequelize";


const playList = sequelize.define('playlists',{
    id_playlist:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_playlist:{
        type: DataTypes.STRING,
        allownull: false
    },
    genero_musica:{
        type: DataTypes.STRING,
        allownull: false
    }
},{
    tablename: 'playlists'
})



playList.sync({force: false}).then(()=>{
    console.log('Tabla de playlist creada')
})

export default playList