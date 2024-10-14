const { sql, connectToDatabase } = require('./db');

async function agregarUsuario(usuario) {
    const { NombreUsuario, Password, Email, Imagen} = usuario;
    const pool = await connectToDatabase();
    const request = pool.request();
    request.input('NombreUsuario', sql.VarChar, NombreUsuario,);
    request.input('Password', sql.VarChar, Password);
    request.input('Email', sql.VarChar, Email);
    request.input('Rol', "Empleado");
    request.input('Imagen', sql.VarBinary, Imagen);

    await request.query('INSERT INTO Usuarios (NombreUsuario, Password, Email, Rol , Imagen) VALUES (@NombreUsuario, @Password, @Email, @Rol , @Imagen)');
   
}

module.exports = {
    agregarUsuario,
};