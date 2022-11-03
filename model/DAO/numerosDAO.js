import CnxMongoDB from "../DB.js"

class NumerosDAO{

    findNumeros = async () => {
        try {
           return await CnxMongoDB.db.collection('numeros').find({}).toArray() 
        } catch (error) {
            console.log(`Error en findNumeros ${error}`)
        }
        
    }

    saveNumero = async (numero) => {
        try {
            await CnxMongoDB.db.collection('numeros').insertOne(numero)
            return numero
        } catch (error) {
            console.log(`Error en saveNumero ${error}`)
        }
        
    }
}

export default NumerosDAO