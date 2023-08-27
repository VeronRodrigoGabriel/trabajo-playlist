import sequelize from "../../db.js";
import { DataTypes } from "sequelize";


const playList = sequelize.define('playlists',{
    id:{
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

export default playList