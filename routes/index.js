const express = require('express');
const router = express.Router();
const path = require('path');

// Página principal
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Galería
router.get('/galeria', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/galeria.html'));
});

// Rutas y horarios
router.get('/rutas-horarios', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/rutas-horarios.html'));
});

module.exports = router;
