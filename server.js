import express from 'express'
import RouterNumeros from './router/routerNumeros.js'
import CnxMongoDB from './model/DB.js'
import config from './config.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.use('/numeros', new RouterNumeros().start())

await CnxMongoDB.conectar()

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Escuchando en el servidor ${PORT}`))
server.on('error', error => console.log(`Error en el servidor ${error.message}`))