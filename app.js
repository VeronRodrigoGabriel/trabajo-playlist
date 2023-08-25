import express from 'express'
const app = express()
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'



const port = process.env.PORT

//middleware
app.use(morgan('dev'))
app.use(cors())

//Rutas
import router from './src/routes/router.usuario'
app.use('/api', router)


app.listen(() => {
    console.log('servidor escuchando en el puerto', port)
})

