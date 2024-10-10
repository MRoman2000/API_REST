// index.js
const express = require('express');

const productosRoutes = require('./routes/productosRoutes');
const categoriasRoutes = require('./routes/categoriasRoutes');
const authRoutes = require('./routes/authRoutes');



const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));


// Rutas 

app.use('/api/categorias',categoriasRoutes);
app.use('/api/productos',productosRoutes);
app.use('/api', authRoutes);


app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi API REST!');
});


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
