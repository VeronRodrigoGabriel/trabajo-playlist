import sequelize from "../../db.js";
import { DataTypes } from "sequelize";

const Usuarios = sequelize.define('Usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email:{
        type: DataTypes.STRING,
        allownull: false
    },
    password: {
        type: DataTypes.STRING,
        allownull: false
    },
    telefono:{
        type: DataTypes.INTEGER,
        allownull: false
    },
    nombre_completo:{
        type: DataTypes.STRING,
        allownull: false
    },
    username: {
        type: DataTypes.STRING,
        allownull: false
    }
}, {
    tablename: 'Usuarios'
});

Usuarios.sync({ force: false }).then(() => {
    console.log('Tabla de Usuarios creada');
});

export default Usuarios;