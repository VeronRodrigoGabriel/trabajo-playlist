import sequelize from '../../db.js'
import { DataTypes } from 'sequelize'

const canciones = sequelize.define('canciones',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_cancion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    artista:{
        type: DataTypes.STRING,
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