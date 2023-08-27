import sequelize from '../../db.js'
import { DataTypes } from 'sequelize'

const canciones = sequelize.define('canciones',{
    id_canciones:{
        type: DataTypes.INTEGER,
        primarykey: true,
        autoIncrement: true
    },
    nombre_cancion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    artista:{

    },
    duracion: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
   tablename: 'canciones'
});

canciones.sync({force: false}).then(()=>{
    console.log('Tabla de canciones creada')
})

export default canciones