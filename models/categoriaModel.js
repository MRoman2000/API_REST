
const {sql, connectToDatabase } = require('../models/db');


async function obtenerCategorias(){
    const pool = await connectToDatabase();
    const result = await pool.request().query('SELECT Id, Nombre FROM Categorias');
    return result.recordset;
}

module.exports = {
    obtenerCategorias,

  //  obtenerCategorias,
};