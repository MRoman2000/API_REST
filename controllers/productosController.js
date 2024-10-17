const productosModel = require('../models/productoModel');

async function agregarProducto(req, res) {
    try {
        const producto = {
            Nombre: req.body.Nombre,
            Descripcion: req.body.Descripcion,
            Stock: req.body.Stock,
            Imagen: req.file.filename, // Asegúrate de usar "filename" en minúsculas
            CategoriaId: req.body.CategoriaId
        };

        await productosModel.agregarProducto(producto);
        console.log(producto);
        res.status(201).json({ message: 'Producto agregado exitosamente' });
    } catch (err) {
        console.error('Error al agregar producto:', err);
        res.status(500).json({ message: 'Error al agregar producto', error: err.message });
    }
}

async function obtenerProductos(req, res) {
    try {
        const productos = await productosModel.obtenerProductos();
        res.json(productos);
    } catch (err) {
        console.error('Error al obtener productos:', err);
        res.status(500).json({ message: 'Error al obtener productos', error: err.message });
    }
}

module.exports = {
    agregarProducto,
    obtenerProductos,
}