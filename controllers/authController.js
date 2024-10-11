const usuarioModel = require('../models/usuarioModel');
const jwt = require('jsonwebtoken');


const SECRET_KEY = 'prueba';

async function login(req, res) {
    const { Email, Password } = req.body;

    try {
        // Usar await para esperar el resultado de obtenerUsuarioPorEmail
        const user = await usuarioModel.obtenerUsuarioPorEmail(Email);

        // Verificar si el usuario existe
        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        console.log('Contraseña almacenada:', user.Password);

        // Comparar la contraseña ingresada con la almacenada
        if (Password.trim() !== user.Password) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        // Generar el token
        const token = jwt.sign({ id: user.ID, email: user.Email }, SECRET_KEY, {
            expiresIn: '1h',
        });

        // Responder con los datos del usuario y el token
        res.json({
            message: 'Login correcto',
            id: user.ID,
            nombreUsuario: user.NombreUsuario,
            rol: user.Rol,
            email: user.Email,
            imagen: user.Imagen,
            token: token,
        });

    } catch (err) {
        console.error('Error en el login:', err);
        res.status(500).json({ message: 'Error en el servidor', error: err.message });
    }
}
// Ruta protegida (requiere autenticación)
async function protected(req,res)  {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. No token proporcionado.' });
    }

    try {
        const verified = jwt.verify(token, SECRET_KEY);
        res.json({ message: 'Acceso concedido', user: verified });
    } catch (err) {
        res.status(400).json({ message: 'Token no válido' });
    }
};


module.exports = {
    login,
    protected,
};
