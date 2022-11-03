import express from 'express'
import ControllerNumeros from '../controller/controllerNumeros.js'

class RouterNumeros{
    constructor(){
        this.routerNumeros = express.Router()
        this.controllerNumeros = new ControllerNumeros()
    }

    start(){
        this.routerNumeros.post('/entrada', this.controllerNumeros.postNumero)
        this.routerNumeros.get('/entrada', this.controllerNumeros.getNumeros)
        this.routerNumeros.get('/promedio', this.controllerNumeros.getPromedio)
        this.routerNumeros.get('/minmax', this.controllerNumeros.getMinMax)
        this.routerNumeros.get('/cantidad', this.controllerNumeros.getCantidad)
        
        return this.routerNumeros
    }
}

export default RouterNumeros