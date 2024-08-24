const express = require('express');
const router = express.Router();
const proveedorController = require('../controller/proveedorController');

router.post('/', proveedorController.agregarProveedores);
router.get('/', proveedorController.buscarProveedores);
router.get('/:id', proveedorController.buscarProveedoresId);
router.put('/:id', proveedorController.modificarProveedoresId);
router.patch('/:id', proveedorController.editarProveedoresId);
router.delete('/:id', proveedorController.eliminarProveedoresId);

module.exports = router;