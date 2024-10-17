const sql = require('mssql');
require('dotenv').config();

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: false,
        trustServerCertificate: true,
        trustedConnection: true,
    },
};

async function connectToDatabase() {
    try {
        const pool = await sql.connect(dbConfig);
        console.log('Conectado a la base de datos SQL Server');
        return pool;
    } catch (err) {
        console.error('Error conectando a la base de datos:', err);
    }
}

module.exports = {
    sql,
    connectToDatabase,
};
