const usuarioModel = require('../models/usuarioModel');
const jvt = require('jsonwebtoken');


const SECRET_KEY = 'prueba';
async function login(req,res) {
    const  {email , password } = req.body;


    try {
        const user = usuarioModel.obtenerUsuarioPorEmail(email);

        if (!user) {
            return res.status(400).json({  message: 'Usuario no encontrado'   });
        }

        if (password !== user.password) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        const token = jvt.sign({ id: user.ID, email: user.email }, SECRET_KEY, {
            expiresIn: '1h',
        });

        res.json({
            message: 'Login correcto',
            id: user.ID,
            nombreUsuario: user.nombreUsuario,
            rol: user.rol,
            Imagen: user.Imagenm,

        });

    } catch (err) {
        console.error('Error en el login:', err);
        res.status(500).json({ message: 'Error en el servidor', error: err.message });
    }
} 


module.exports = {
    login,
}