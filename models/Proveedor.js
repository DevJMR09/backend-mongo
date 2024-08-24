const mongoose = require('mongoose');
const clienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    tipoDocumento: {
        type: String,
        required: true
    },
    documento: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    condicionesPago: {
        type: String,
        required: true
    },
    moneda: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    },
}, { versionkey: false });

module.exports = mongoose.model('Proveedor', clienteSchema);