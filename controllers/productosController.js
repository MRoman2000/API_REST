const productoModel = require('../models/productoModel');

async function obtenerProductos(req, res) {
    try {
        const productos = await productoModel.obtenerProductos();
        res.json(productos);
    } catch (err) {
        console.error('Error al obtener productos:', err);
        res.status(500).json({ message: 'Error al obtener productos', error: err.message });

    }
}


async function agregarProducto(req, res) {
    try {
        await productoModel.agregarProducto(req.body);  // Pasar todo el objeto directamente al modelo
        console.log(req.body);
        res.status(201).json({ message: 'Producto agregado exitosamente' });
    } catch (err) {
        console.error('Error al agregar producto:', err);
        res.status(500).json({ message: 'Error al agregar producto', error: err.message });
    }
}
/* async function agregarProducto(req, res) {
    const { Nombre, Descripcion, Stock, Imagen , CategoriaId } = req.body;

    try {
        await productoModel.agregarProducto({ Nombre, Descripcion, Stock, Imagen,CategoriaId });
        res.status(201).json({ message: 'Producto agregado exitosamente' });
        console.log(res)
    } catch (err) {
        console.error('Error al obtener productos:', err);
        res.status(500).json({ message: 'Error al obtener productos', error: err.message });
    }
} */

module.exports = {
    obtenerProductos,
    agregarProducto,
    //   obtenerCategorias,
};