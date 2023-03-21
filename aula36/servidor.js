const produto = require('./Controllers/produto');
const categoria = require('./Controllers/categoria');
const cliente = require('./Controllers/clientes');

//IMPORTANDO DIRETAMENTE DO NODE
const http = require('http');

const PORTA = 8000;
const ENDERECO = 'localhost';

//ESSA FUNÇÃO SEMPRE SERÁ EXECUTADA
//QUANDO ALGUMA REQUISIÇÃO FOI FEITA AO SEERVIDOR
function recepcao(req, res){
    let resposta = "Página não encontrada...";

    switch(req.url){
        case"/clientes":
            resposta = cliente.buscar();
        break;
        case"/produtos":
            resposta = produto.buscar();
        break;
        case"/categorias":
            resposta = categoria.buscar();
        break;
    }
    res.end(resposta)
}

//CRIANDO O SERVIDOR E COLOCANDO ELE PARA ESCUTAR AS REQUISIÇÕES
http.createServer(recepcao).listen(PORTA, ENDERECO, () => {
    console.log('---------------');
    console.log('-A veia ta ON-');
    console.log('---------------')
});