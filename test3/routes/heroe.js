const express = require('express');

const router = express.Router();

const heroeController = require('../controllers/heroe');

//http://localhost:300/api/heroe
router.get('/', heroeController.listaHeroes);

router.post('/', heroeController.crearHeroe);
router.get('/:id', heroeController.obtenerHeroe);
router.put('/:id', heroeController.modificarHeroe);
router.delete('/:id', heroeController.eliminarHeroe);


module.exports = router;