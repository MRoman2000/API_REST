const productoModel = require('../models/productoModel');

async function obtenerProductos(req, res) {
    try {
        console.log(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_SERVER, process.env.DB_DATABASE);

        const productos = await productoModel.obtenerProductos();
        res.json(productos);
    } catch(err) {
        console.error('Error al obtener productos:', err);
        res.status(500).json({message: 'Error al obtener productos', error: err.message });
        
    }

}


async function agregarProducto (req,res) {
    const {Nombre, Descripcion, Stock, Imagen} = req.body;

    try {
        await productoModel.agregarProducto ({ Nombre, Descripcion, Stock, Imagen });
        res.status(201).json({ message: 'Producto agregado exitosamente' });

    } catch (err) {
        console.error('Error al obtener productos:', err);
        res.status(500).json({message: 'Error al obtener productos', error: err.message });
    }
}

module.exports = {
    obtenerProductos,
    agregarProducto,
};