const express = require("express");
const app = express.Router();
const controller = require("./controller");

app.get("/categories", async (req, res) => {
    res.send(await controller.listAll());
});

app.get("/categories/:id", async (req, res) => {
    res.send(await controller.listOne(req.params.id));
})

//rota para criar uma linha na tabela
app.post("/categories", async (req, res) => {
    res.send(await controller.create(req.body));
});

//endpoint para editar uma linha
app.put("/categories/:id", async (req, res) => {
    res.send(await controller.edit(req.params.id, req.body));
});

app.patch("/categories/:id", async (req, res) => {
    res.send(await controller.disable(req.params.id));
})

//apagar
app.delete("/categories/:id", async (req, res) => {
    res.send(await controller.destroy(req.params.id));
});

module.exports = app;