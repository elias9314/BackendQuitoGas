const express = require('express');
const app = express();

// midelwares
app.use(express.json());
app.use(express.urlencoded({extended: false}))
// Cors
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
// Definiendo rutas


const rolRoute = require('./routes/rol')
const usuarioRoute =  require('./routes/usuarioRoute')
app.use('/api',usuarioRoute);
app.use('/api',rolRoute,usuarioRoute);

app.listen(3000);
console.log('server on port 3000');
