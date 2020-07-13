const express = require('express');
const app = express();

// midelwares
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Definiendo rutas


const rolRoute = require('./routes/rol')
const usuarioRoute =  require('./routes/usuarioRoute')
app.use('/api',usuarioRoute);
app.use('/api',rolRoute,usuarioRoute);

app.listen(3000);
console.log('server on port 3000');
