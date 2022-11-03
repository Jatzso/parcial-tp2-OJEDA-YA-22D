import {MongoClient} from 'mongodb'
import config from '../config.js'

class CnxMongoDB{

    static connection = false
    static db
    static client

    static conectar = async () => {
        try {
            console.log(`Conectando con la Base de Datos..`)
            CnxMongoDB.client = new MongoClient(config.STR_CNX, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            await CnxMongoDB.client.connect()
            console.log(`Base de datos conectada!`)
            CnxMongoDB.db = CnxMongoDB.client.db(config.BASE)
            CnxMongoDB.connection = true
        } catch (error) {
            console.log(`Error en la conexión con la Base de Datos ${error.message}`)
        }
    }

    static desconectar = async () => {
        if(!CnxMongoDB.connection) return
        await CnxMongoDB.client.close()
    }

}

export default CnxMongoDB