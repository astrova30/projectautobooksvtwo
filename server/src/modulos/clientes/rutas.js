const express = require('express');
const respuesta = require('../../red/respuestas');
const controlador = require('./controlador');

const router = express.Router();

router.get('/', async function (req, res) {
    try {
        const items = await controlador.libros();
        respuesta.success(req, res, items, 200);
    } catch (error) {
        console.error('Error al obtener los libros:', error);
        respuesta.error(req, res, 'Error al obtener los libros', 500);
    }
});

module.exports = router;