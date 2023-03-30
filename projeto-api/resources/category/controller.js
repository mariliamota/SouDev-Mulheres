const db = require("../../connection/database");
const table = "tb_category";

async function listAll(){
    let lista = await db.execute(`
        SELECT * FROM ${table};
    `);
    return JSON.stringify(lista);
}

async function listAll(){
    let lista = await db.execute(`
        SELECT * FROM ${table} WHERE ${id};
    `);
    return JSON.stringify(lista[0]);
}

module.exports ={
    listAll
}