// const express = require('express');
// const app = express.Router();

const app = require('express').Router();
const database = require('../../connection/database');

//buscando todos os banners
app.get('/banners', async (req, res) => {
    let dados = await database.execute(`SELECT * FROM tb_banner`);

    res.send(dados);
});

//buscando um banner específico
app.get('/banners/:id', async (req, res) => {
    let dados = await database.execute(`SELECT * FROM tb_banner WHERE id = '${req.params.id}'`);
    res.send(dados[0]);
});

app.post('/banners', async (req, res) => {
    res.send('ok');
});

app.put('/banners/:id', async (req, res) => {
    res.send('ok');
});

app.delete('/banners/:id', async (req, res) => {
    res.send('ok');
});

module.exports = app;