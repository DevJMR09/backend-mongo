const express = require('express');
const connectBD = require('../config/db');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7000;

connectBD();
app.use(cors());
app.use(express.json());

app.use('/api/clientes', require('../routers/clienteRouter'));
app.use('/api/proveedores', require('../routers/proveedorRouter'));

app.get('/', (req, res) => {
    res.send('Welcome from browser');
});

app.listen(port, () => { console.log('Connect from server', `http://localhost:${port}/`) });