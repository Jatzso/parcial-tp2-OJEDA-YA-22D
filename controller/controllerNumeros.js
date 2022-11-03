import ApiNumeros from "../api/apiNumeros.js"

class ControllerNumeros{
    constructor(){
        this.apiNumeros = new ApiNumeros()
    }

    getNumeros = async (req, res) => {
        try {
            let numeros = await this.apiNumeros.obtenerNumeros()
             res.json({"Numeros": numeros})
        } catch (error) {
            console.log(`Error en getNumeros ${error}`)
        }
        
    }

    postNumero = async (req, res) => {
        try {
           const numero = req.body
            numero.numero = parseInt(numero.numero)
            let numeroGuardado = await this.apiNumeros.guardarNumero(numero) 
            res.json(numeroGuardado) 
        } catch (error) {
            console.log(`Error en postNumero ${error}`)
        }
        
    }

    getPromedio = async (req, res) => {
        try {
            let promedio = await this.apiNumeros.calcularPromedio()
            res.json({"Promedio": promedio})
        } catch (error) {
            console.log(`Error en getPromedio ${error}`)
        }

    }

    getMinMax = async (req, res) => {
        try {
            let min = await this.apiNumeros.calcularMin()
            let max = await this.apiNumeros.calcularMax()
            res.json({"Min": min, "Max": max})
        } catch (error) {
            console.log(`Error en getMinMax ${error}`)
        }
        
    }

    getCantidad = async (req, res) => {
        try {
            let cantidad = await this.apiNumeros.obtenerCantidad()
            res.json({"Cantidad": cantidad})
        } catch (error) {
            console.log(`Error en getCantidad ${error}`)
        }
        
    }
}

export default ControllerNumeros