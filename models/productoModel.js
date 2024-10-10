const {sql, connectToDatabase } = require('../models/db');


async function obtenerProductos(){
    const pool = await connectToDatabase();
    const result = await pool.request().query('SELECT * FROM Productos');
    return result.recordset;
}

async function agregarProducto(producto) {
    const { Nombre, Descripcion, Stock, Imagen } = producto;
    const pool = await connectToDatabase();
    const request = pool.request();
    request.input('Nombre', sql.VarChar, Nombre);
    request.input('Descripcion', sql.VarChar, Descripcion);
    request.input('Stock', sql.Int, Stock);
    request.input('Imagen', sql.VarBinary, Imagen);

    await request.query('INSERT INTO Productos (Nombre, Descripcion, Stock, Imagen) VALUES (@Nombre, @Descripcion, @Stock, @Imagen)');
}

module.exports = {
    obtenerProductos,
    agregarProducto,
};