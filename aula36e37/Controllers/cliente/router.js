const express = require('express')
const cliente = require('./clientes');

const app = express.Router();
app.get('/clientes', (req, res) => {
    res.send(cliente.buscar());
});
app.post('/clientes', (req, res) =>{
    res.send(cliente.cadastrar());
});

module.exports = app