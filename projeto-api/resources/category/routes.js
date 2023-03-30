const express = require("express");
const app = express.Router();
const controller = require("./controller");

app.get("/categories", async (req, res) => {
    res.send(await controller.listAll());
});

module.exports = app;