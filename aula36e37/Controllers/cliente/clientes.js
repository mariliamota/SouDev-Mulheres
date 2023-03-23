const cliente = require("./model")

function buscar(){
    return JSON.stringify(cliente)
}

function cadastrar(){
    return "pagina de cadastro clientes"
}

module.exports = {buscar, cadastrar}