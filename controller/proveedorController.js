const Proveedor = require('../models/Proveedor');

exports.buscarProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedor.find();
        res.json(proveedores);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al buscar proveedores');
    }
};

exports.agregarProveedores = async (req, res) => {
    try {
        const proveedores = new Proveedor(req.body);
        await proveedores.save();
        res.json(proveedores);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al agregar proveedor');
    }
};

exports.buscarProveedoresId = async (req, res) => {
    try {
        const proveedores = await Proveedor.findById(req.params.id);
        if (!proveedores) {
            res.status(404).send({ msg: 'Proveedor no encontrado' });
        } else {
            res.json(proveedores);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al buscar proveedor');
    }
};

exports.modificarProveedoresId = async (req, res) => {
    try {
        const proveedores = await Proveedor.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!proveedores) {
            res.status(404).send('Proveedor no encontrado');
        } else {
            res.json(proveedores);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al modificar proveedor');
    }
};

exports.editarProveedoresId = async (req, res) => {
    try {
        const proveedores = await Proveedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!proveedores) {
            res.status(404).send('Proveedor no existe');
        } else {
            res.json(proveedores);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al editar proveedor');
    }
};

exports.eliminarProveedoresId = async (req, res) => {
    try {
        let proveedores = await Proveedor.findById({ _id: req.params.id });
        if (!proveedores) {
            res.status(404).send('El proveedor no existe');
            return;
        } else {
            await Proveedor.findOneAndDelete({ _id: req.params.id });
            res.json({ msg: 'Proveedor eliminado' });
            return;
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar proveedor');
    }
};