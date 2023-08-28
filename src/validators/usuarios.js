import {checkSchema} from 'express-validator'

export const esquemaUsuario = checkSchema({
    email:{
        errorMessage: 'Email invalido',
        isEmail: true
    },
    password: {
        isLength:{
            options: {min: 8},
            errorMessage: 'La contraseña tiene que tener un minimo de 8 caracteres'
        }
    }
})