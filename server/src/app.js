const express = require('express');
const config = require('./config');

const clientes = require ('./modulos/clientes/rutas')

const app = express();


//configuración
app.set('port', config.app.port)

//rutas
app.use('/libros', clientes)

module.exports = app;