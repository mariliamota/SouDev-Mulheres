//importando o express
const express = require('express');

//importando a conexão com o banco de dados que agora está isolada
const database = require('../../connection/database');

//criando o app para adicionar as novas rotas/endpoints
const app = express.Router();

//criando uma rota do tipo GET para buscar todas as escolas
app.get('/escolas', async (req,res) => {
    let dados = await database.execute('SELECT * FROM tb_escola');
    res.send(dados);
});
//buscando uma escola específica pelo id
app.get('/escolas/:id', async (req, res) => {
    let dados = await database.execute(`
    SELECT * FROM tb_escola WHERE id='${req.params.id}'
    `);

    res.send(dados[0])
});

//adicionando uma escola
app.post('/escolas', async (req, res) => {
    let dados = req.body;

    let sql = await database.execute(`
        INSERT INTO tb_escola (nome, endereco) VALUES ('${req.body.nome}', '${req.body.endereco}');
    `);

    dados.id = sql.insertId;

    res.status(201).send(dados);

    // adiciona uma escola porem demora mais
    // let escola = await database.execute(`
    //     SELECT * FROM tb_escola WHERE id = ${sql.insertId};
    // `)
    // res.status(201).send(JSON.stringify(escola[0]));
});

//apagando uma escola específica
app.delete('/escolas/:id', async (req, res) => {
    let dados = await database.execute(`
    DELETE FROM tb_escola WHERE id='${req.params.id}'
    `);

    res.sendStatus(204)
});

//editando uma escola
app.put('/escolas/:id', async (req, res) => {
    let dados = req.body

    await database.execute(`
        UPDATE tb_escola SET nome= '${dados.nome}', endereco= '${dados.endereco}'
        WHERE id= '${req.params.id}'
    `);

    dados.id = parseInt(req.params.id);
    res.send(dados);
});

//exportando todas as rotas criadas nesse arquivo
module.exports = app