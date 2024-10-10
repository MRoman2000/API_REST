// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'prueba'; // Deberías mover esto a las variables de entorno

function verificarToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. No token proporcionado.' });
    }

    try {
        const verified = jwt.verify(token, SECRET_KEY);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Token no válido' });
    }
}

module.exports = verificarToken;
