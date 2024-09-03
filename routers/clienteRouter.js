const express = require('express');
const router = express.Router();
const clienteController = require('../controller/clienteController');

router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.buscarClientes);
router.get('/:id', clienteController.buscarClientesId);
router.put('/:id', clienteController.modificarClientes);
// router.patch('/:id', clienteController.editarClientes);
router.delete('/:id', clienteController.eliminarClientesId);

module.exports = router;