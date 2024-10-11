const { sql, connectToDatabase } = require('./db');

async function obtenerUsuarioPorEmail(email) {
    const pool = await connectToDatabase();
    const request = pool.request();

    request.input('Email', sql.VarChar,email);
    const result = await request.query("Select ID,NombreUsuario, Password ,Email, Rol, Imagen From Usuarios Where Email = @Email");
    console.log('Resultado de la consulta:', result);
    return result.recordset[0];
      
}

module.exports = {
    obtenerUsuarioPorEmail,
};