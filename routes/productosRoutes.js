const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');
const upload = require('../middleware/upload');

router.post('/', upload.single('Imagen'), productosController.agregarProducto);
router.get('/', productosController.obtenerProductos);

module.exports = router;