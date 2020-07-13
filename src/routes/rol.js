;
'use strict'
const express = require('express')
const rolController = require('../Controllers/roles')
const router = express.Router();

router.post('/insertRol', rolController.insertRol)
router.get('/allRol', rolController.readRol)
router.get('/Rol/:id', rolController.getRolbyId)
router.put('/updateRol/:id', rolController.updateRol)
router.delete('/deleteRol/:id', rolController.deleteRol)
module.exports = router;