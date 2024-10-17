const { sql, connectToDatabase } = require('../models/db');


async function obtenerProductos() {
    const pool = await connectToDatabase();
    const result = await pool.request().query('SELECT * FROM Productos');
    return result.recordset;
}



async function agregarProducto(producto) {
    const { Nombre, Descripcion, Stock, Imagen, CategoriaId } = producto;
    const pool = await connectToDatabase();
    const request = pool.request();

    request.input('Nombre', sql.VarChar, Nombre);
    request.input('Descripcion', sql.VarChar, Descripcion);
    request.input('Stock', sql.Int, Stock);
    request.input('Imagen', sql.VarChar, Imagen);
    request.input('CategoriaId', sql.Int, CategoriaId);

    await request.query('INSERT INTO Productos (Nombre, Descripcion, Stock, Imagen, CategoriaId) VALUES (@Nombre, @Descripcion, @Stock, @Imagen, @CategoriaId)');
}

module.exports = {
    obtenerProductos,
    agregarProducto,
};