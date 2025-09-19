const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Rutas
const indexRouter = require('./routes/index');

app.use(express.static(__dirname));

// Middleware para servir archivos estáticos
app.use('/public', express.static(path.join(__dirname, 'public')));

// Usar rutas
app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
