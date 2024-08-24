const Cliente = require('../models/Cliente');

exports.buscarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al buscar clientes');
    }
};

exports.agregarClientes = async (req, res) => {
    try {
        let clientes;
        clientes = new Cliente(req.body);
        await cliente.save();
        res.json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al agregar cliente');
    }
};

exports.buscarClientesId = async (req, res) => {
    try {
        let clientes = await Cliente.findById(req.params.id);
        if (!clientes) {
            res.status(404).send({ msg: 'Cliente no encontrado' });
        } else {
            res.json(clientes);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al buscar cliente');
    }
};

exports.modificarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!clientes) {
            res.status(404).send('Cliente no encontrado');
        } else {
            res.json(clientes);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al modificar cliente');
    }
};

exports.editarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!clientes) {
            res.status(404).send('Cliente no existe');
        } else {
            res.json(clientes);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al editar cliente');
    }
};

exports.eliminarClientesId = async (req, res) => {
    try {
        let clientes = await Cliente.findById({ _id: req.params.id });
        if (!clientes) {
            res.status(404).send('El cliente no existe');
            return;
        } else {
            await Cliente.findOneAndDelete({ _id: req.params.id });
            res.json({ msg: 'Cliente eliminado' });
            return;
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar cliente');
    }
};