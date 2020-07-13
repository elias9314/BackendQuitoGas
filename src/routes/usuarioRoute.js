const { Router } =  require('express');
const router = Router();

// todas las rutas

const usuariosController = require('../controllers/usuario')


router.get('/users', usuariosController.getUsers);
router.post('/users', usuariosController.createUser);

module.exports = router;