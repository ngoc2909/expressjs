var express = require('express');
var router = express.Router();

var banhang = require('../controllers/banhang');

// Create a new Note
router.post('/banhang', banhang.create);

// Retrieve all
router.get('/banhang', banhang.findAll);

// Retrieve a single
router.get('/banhang/:banhangId',banhang.findOne);

// Update
router.put('/banhang/:banhangId', banhang.update);

// Delete
router.delete('/banhang/:banhangId', banhang.delete);

module.exports = router;
