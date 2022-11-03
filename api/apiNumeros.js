import FactoryDAO from "../model/factoryDAO.js"
import config from "../config.js"

class ApiNumeros{
    constructor(){
        this.numerosDao = FactoryDAO.get(config.MODO_PERSISTENCIA)
    }

    obtenerNumeros = async () => {
        try {
            let numeros = await this.numerosDao.findNumeros()
            let numerosSinId = numeros.map(n => n.numero)
            return numerosSinId 
        } catch (error) {
            console.log(`Error en obtenerNumeros ${error}`)
        }
        
    }

    guardarNumero = async (numero) => {
        try {
            return await this.numerosDao.saveNumero(numero)
        } catch (error) {
            console.log(`Error en guardarNumero ${error}`)
        }
        
    }

    calcularPromedio = async () => {
        try {
            let numeros = await this.numerosDao.findNumeros()
            let cantidad = numeros.length
            let promedio = 0
            if(cantidad > 0){
            let total = 0
                numeros.forEach(n => {
                total += n.numero
            });
            promedio = total / cantidad
        
            return promedio
         }
        } catch (error) {
            console.log(`Error en calcularPromedio ${error}`)
        }     
}

    calcularMin = async () => {
        try {
             let numeros = await this.numerosDao.findNumeros()
            let numerosSinId = numeros.map(n => n.numero)
            let min = Math.min.apply(Math, numerosSinId)
            return min
        } catch (error) {
            console.log(`Error en calcularMin ${error}`)
        }
       
    }

    calcularMax = async () => {
        try {
            let numeros = await this.numerosDao.findNumeros()
            let numerosSinId = numeros.map(n => n.numero)
            let max = Math.max.apply(Math, numerosSinId)
            return max
        } catch (error) {
            console.log(`Error en calcularMax ${error}`)
        }
        
    }

    obtenerCantidad = async () => {
        try {
            let numeros = await this.numerosDao.findNumeros()
            let cantidad = numeros.length
            return cantidad
        } catch (error) {
            console.log(`Error en obtenerCantidad ${error}`)
        }
        
    }
}

export default ApiNumeros