const mongoose = require('mongoose');
require('dotenv').config();

const connectBD = () => {
    mongoose.connect(process.env.BD_MONGO).then(() => console.log('connected')).catch((err) => console.log(err));
};

module.exports = connectBD;