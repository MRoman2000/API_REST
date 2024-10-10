const categoriaModel = require('../models/categoriaModel');

async function obtenerCategorias(req, res) {
    try {
        const categoria = await categoriaModel.obtenerCategorias();
        res.json(categoria);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener categorías' });
    }
}

module.exports = {
    obtenerCategorias,
};
