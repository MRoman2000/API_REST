const register = require('../models/registerModel');



async function agregarUsuario(req, res) {
    try {
        await register.agregarUsuario(req.body);  // Pasar todo el objeto directamente al modelo
        console.log(req.body);
        res.status(201).json({ message: 'Usuario agregado exitosamente' });
    } catch (err) {
        console.error('Error al agregar usuario:', err);
        res.status(500).json({ message: 'Error al agregar usuario', error: err.message });
    }
}

module.exports = {
    agregarUsuario,
    //   obtenerCategorias,
};