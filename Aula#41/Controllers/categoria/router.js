const express = require('express');
const categoria = require('./categoria');

//CRIANDO UM ROUTER PARA GERENCIAR OS ENDPOINTS DE CATEGORIA
const app = express.Router();
app.get('/categorias', (req, res) =>{
    res.send(categoria.buscar());
});
app.get('/categorias/:id', (req, res) =>{
    res.send(categoria.buscarUm(req.params.id));
});

app.post('/categorias', (req, res) =>{
    res.send(categoria.cadastrar());
});

app.post('/categorias', (req, res) => {
    res.send(categoria.cadastrar(req.body));
});

//EXPORTANDO TODAS AS ROTAS CRIADAS AQUI
module.exports = app