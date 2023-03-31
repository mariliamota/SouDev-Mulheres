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

//adicionando um registro de banner
app.post('/banners', async (req, res) => {
    let corpo = req.body;
    let sql = await database.execute(`INSERT INTO tb_banner (titulo, descricao, imagem) VALUES ('${corpo.titulo}', '${corpo.descricao}', '${corpo.imagem}')`);

    corpo.id = sql.insertId;
    res.send(corpo);
});

app.put('/banners/:id', async (req, res) => {
    res.send('ok');
});

app.delete('/banners/:id', async (req, res) => {
    res.send('ok');
});

module.exports = app;