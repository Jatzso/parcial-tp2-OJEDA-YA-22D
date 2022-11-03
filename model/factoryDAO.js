import NumerosDAO from "./DAO/numerosDAO.js"

class FactoryDAO{
    static get(tipo){
        return new NumerosDAO()
}
}

export default FactoryDAO