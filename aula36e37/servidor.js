const express = require('express');

const categoriaRouter = require('./Controllers/categoria/router');
const clienteRouter = require('./Controllers/cliente/router')
const produtoRouter = require('./Controllers/produto/router')

const PORTA = 8000;

//INICIANDO UMA APLICAÇÃO COM EXPRESS
const app = express();

app.use(express.json());

app.use(categoriaRouter);
app.use(clienteRouter);
app.use(produtoRouter);

app.listen(PORTA, () =>{});