import sequelize from '../../db.js'
import { DataTypes } from 'sequelize'

const canciones = sequelize.define('canciones',{
    id_canciones:{
        type: DataTypes.INTEGER,
        primarykey: true,
        autoincrement: true
    },
    nombre_cancion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    artista:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    duracion: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
   tablename: 'canciones'
});



export default canciones