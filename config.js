import dotenv from 'dotenv'

dotenv.config()

const STR_CNX = process.env.STR_CNX
const BASE = process.env.BASE
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA
const PORT = process.env.PORT

export default {
    STR_CNX,
    BASE,
    MODO_PERSISTENCIA,
    PORT
}

