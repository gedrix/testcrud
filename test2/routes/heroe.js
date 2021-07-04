const express = require('express');
const router = express.Router();

const heroe = require('../controllers/heroe');


router.post('/', heroe.crearHeroe);
router.get('/:id', heroe.obtenerHeroe);
 router.put('/:id', heroe.modificarHeroe);
 router.delete('/:id', heroe.eliminarHeroe);
 router.get('/', heroe.listarHeroes);


module.exports = router;