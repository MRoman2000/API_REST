const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');
const verificarToken = require('../middleware/authMiddleware');


// router.get('/',  productosController.obtenerCategorias);
router.get('/',  productosController.obtenerProductos);
router.post('/', productosController.agregarProducto);

module.exports = router;

