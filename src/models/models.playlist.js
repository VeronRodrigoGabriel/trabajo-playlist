import sequelize from "../../db";
import { DataTypes } from "sequelize";


const playList = sequelize.define('playlist',{
    id_playlist:{
        type: DataTypes.INTEGER,
        primarykey: true,
        autoIncrement: true
    },
    nombre_playlist:{
        type: DataTypes.STRING,
        allownull: false
    },
    genero_musica:{
        type: DataTypes.STRING,
        allownull: false
    },  
     createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      }
},{
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tablename: 'playlist',

})

playList.sync({force: false}).then(()=>{
    console.log('Tablla de playlist creada')
})

export default playList