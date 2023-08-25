import sequelize from "../../db.js";
import { DataTypes } from "sequelize";

const Usuarios = sequelize.define('Usuarios', {
    id: {
        primaryKey: true,
        autoincrement: true
    },
    email:{
        type: DataTypes.STRING,
        allownull: false
    },
    passwors: {
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